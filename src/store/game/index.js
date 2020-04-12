import world from './world.json';

const CHUNK_SIZE = {"width": 128, "height": 128};
const TILE_SIZE = 32;

function tilesByChunk(tiles, world) {
  // Create the chunk arrays
  var chunks = {};
  for(var x = 0; x < Math.ceil(world.width*TILE_SIZE/CHUNK_SIZE.width); x++) {
    chunks[x] = {};
    for(var y = 0; y < Math.ceil(world.height*TILE_SIZE/CHUNK_SIZE.height); y++) {
      chunks[x][y] = new Array();
    }
  }

  // Group tiles by chunks in which they appear. An tile is considered as appearing
  // in a chunk if its bounding box (tile.box) overlaps with the chunk. As an tile
  // could be larger than a single chunk, it means that an tile could be present in
  // any number of chunks. Therefore, this looks that the leftmost chunk in which it
  // is present, then loops till the rightmost chunk, and similarly from top to bottom.
  //
  // E.g. if an tile starts in chunk {x: 0, y: 0} and ends in {x: 2, y: 2}, it will
  // appear in nine different chunks.
  tiles.forEach((tile) => {
    const {left, right, top, bottom} = tile.box;
    var tileChunks = new Set();
    for(var x = Math.floor(left/CHUNK_SIZE.width); x < Math.ceil(right/CHUNK_SIZE.width); x++) {
      for(var y = Math.floor(top/CHUNK_SIZE.height); y < Math.ceil(bottom/CHUNK_SIZE.height); y++) {
        tileChunks.add({x, y});
      }
    }
    tileChunks.forEach(({x, y}) => {
      // It's possible that an tile would extend beyond known chunks. If this is the
      // case, as it will neither be rendered or used for collision, we can safely
      // ignore that.
      if(chunks[x] !== undefined && chunks[x][y] !== undefined) {
        chunks[x][y].push(tile);
      }
    });
    
  });

  return chunks;
}


var tileCounter = 0;
class Tile {
  constructor(tileset, tile) {
    const tileType = tileset.tiles[tile.type];
    // Unique ID for Vue
    this.id = tileCounter++;
  
    // Background information
    this.background = {
      width: tileset.width * TILE_SIZE,
      height: tileset.height * TILE_SIZE,
      x: tileType.x * TILE_SIZE,
      y: tileType.y * TILE_SIZE,
      img: tileset.img
    }
  
    this.height = tileType.height * TILE_SIZE || 32;
    this.width = tileType.width * TILE_SIZE || 32;

    this.physics = tile.physics || tileType.physics || "block";
    this.pos = {
      x: tile.x * TILE_SIZE + this.width/2,
      y: tile.y * TILE_SIZE + this.height
    };
    this.type = tile.type;

    this.box = {
      left: this.pos.x - this.width/2,
      right: this.pos.x + this.width/2,
      top: this.pos.y - this.height,
      bottom: this.pos.y
    }
  }

  get style() {
    return `
      position: absolute;
      background-image: url("${this.background.img}");
      background-size: ${this.background.width}px ${this.background.height}px;
      background-position: ${-this.background.x}px ${-this.background.y}px;
      top: ${this.box.top}px;
      left: ${this.box.left}px;
      width: ${this.width}px;
      height: ${this.height}px;
    `;
  }
}

function parseWorld(world) {
  const tileset = require(`@/assets/tilesets/${world.tileset}.json`);
  tileset.img = require(`@/assets/tilesets/${tileset.img}`);
  const tiles = world.tiles.map((tile) => {
    return new Tile(
      tileset,
      tile
    )
  });

  return {
    start: {
      x: world.start.x * TILE_SIZE + TILE_SIZE/2 || 0,
      y: world.start.y * TILE_SIZE + TILE_SIZE || 0
    },
    tileset: tileset,
    height: world.height * TILE_SIZE || 16,
    width: world.width * TILE_SIZE || 16,
    tiles: tiles,
    chunks: tilesByChunk(tiles, world),
    tilesWithin({left, top, right, bottom}) {
      // Filter chunks that correspond to the bounding box.
      var chunks = new Set();
      for(var x = Math.floor(left/CHUNK_SIZE.width); x < Math.ceil(right/CHUNK_SIZE.width); x++) {
        for(var y = Math.floor(top/CHUNK_SIZE.height); y < Math.ceil(bottom/CHUNK_SIZE.height); y++) {
          chunks.add({x, y});
        }
      }

      // Gather tiles that are in the selected chunks.
      var tiles = [];
      chunks.forEach(({x, y}) => {
        if(this.chunks[x] !== undefined && this.chunks[x][y] !== undefined) {
          tiles = tiles.concat(this.chunks[x][y]);
        }
      })

      // Create a set to only return unique tiles.
      return Array.from(new Set(tiles));
    }
  }
}

export default {
  state: parseWorld(world)
}