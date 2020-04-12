import tileset from './tileset.json';
tileset.img = require('./tileset.png');

const TILE_SIZE = 32;

class Tile {
  constructor(tileset, name, tile) {
    this.name = name;
    this.width = tile.width * TILE_SIZE || TILE_SIZE;
    this.height = tile.height * TILE_SIZE || TILE_SIZE;
    this.physics = tile.physics || "block";
    this.background = {
      width: tileset.width * TILE_SIZE,
      height: tileset.height * TILE_SIZE,
      x: tile.x * TILE_SIZE,
      y: tile.y * TILE_SIZE,
      img: tileset.img
    };
  }

  get style() {
    return `
      background-image: url("${this.background.img}");
      background-size: ${this.background.width}px ${this.background.height}px;
      background-position: ${-this.background.x}px ${-this.background.y}px;
      width: ${this.width}px;
      height: ${this.height}px;
    `;
  }
}

function parseTileset(tileset) {
  var tiles = {};
  Object.keys(tileset.tiles).forEach(name => {
    tiles[name] = new Tile(tileset, name, tileset.tiles[name]);
  });
  return {
    tiles,
    size: TILE_SIZE
  };
}

export default parseTileset(tileset);