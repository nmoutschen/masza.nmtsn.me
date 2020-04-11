import world from './world.json';

const CHUNK_SIZE = {"width": 128, "height": 128};
const ITEM_SIZE = 32;

function itemsByChunk(items, world) {
  // Create the chunk arrays
  var chunks = {};
  for(var x = 0; x < Math.ceil(world.width*ITEM_SIZE/CHUNK_SIZE.width); x++) {
    chunks[x] = {};
    for(var y = 0; y < Math.ceil(world.height*ITEM_SIZE/CHUNK_SIZE.height); y++) {
      chunks[x][y] = new Array();
    }
  }

  // Group items by chunks in which they appear. An item is considered as appearing
  // in a chunk if its bounding box (item.box) overlaps with the chunk. As an item
  // could be larger than a single chunk, it means that an item could be present in
  // any number of chunks. Therefore, this looks that the leftmost chunk in which it
  // is present, then loops till the rightmost chunk, and similarly from top to bottom.
  //
  // E.g. if an item starts in chunk {x: 0, y: 0} and ends in {x: 2, y: 2}, it will
  // appear in nine different chunks.
  items.forEach((item) => {
    const {left, right, top, bottom} = item.box;
    var itemChunks = new Set();
    for(var x = Math.floor(left/CHUNK_SIZE.width); x < Math.ceil(right/CHUNK_SIZE.width); x++) {
      for(var y = Math.floor(top/CHUNK_SIZE.height); y < Math.ceil(bottom/CHUNK_SIZE.height); y++) {
        itemChunks.add({x, y});
      }
    }
    itemChunks.forEach(({x, y}) => {
      // It's possible that an item would extend beyond known chunks. If this is the
      // case, as it will neither be rendered or used for collision, we can safely
      // ignore that.
      if(chunks[x] !== undefined && chunks[x][y] !== undefined) {
        chunks[x][y].push(item);
      }
    });
    
  });

  return chunks;
}


var itemCounter = 0;
class Item {
  constructor(sprite, spriteImg, item, itemType) {
    this.id = itemCounter++;
  
    this.spriteSize = sprite;
    this.spriteImg = spriteImg;
  
    this.physics = itemType.physics || "block";
    this.pos = {
      x: item.x * ITEM_SIZE + ITEM_SIZE/2,
      y: item.y * ITEM_SIZE + ITEM_SIZE
    };
    this.type = item.type;

    this.height = itemType.height || 32;
    this.width = itemType.width || 32;
    this.sprite = {x: itemType.x, y: itemType.y};

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
      background-image: url("${this.spriteImg}");
      background-size: ${this.spriteSize.x}px ${this.spriteSize.y}px;
      background-position: ${-this.sprite.x}px ${-this.sprite.y}px;
      top: ${this.pos.y - this.height}px;
      left: ${this.pos.x - this.width/2}px;
      width: ${this.width}px;
      height: ${this.height}px;
    `;
  }
}

function parseWorld(world) {
  const spriteImg = require(`./${world.sprite.img}`);
  const items = world.items.map((item) => {
    return new Item(
      world.sprite,
      spriteImg,
      item,
      world.itemTypes[item.type]
    )
  });

  return {
    start: world.start || {x: 0, y: 0},
    height: world.height * ITEM_SIZE || 512,
    width: world.width * ITEM_SIZE || 512,
    items: items,
    chunks: itemsByChunk(items, world),
    itemsWithin({left, top, right, bottom}) {
      // Filter chunks that correspond to the bounding box.
      var chunks = new Set();
      for(var x = Math.floor(left/CHUNK_SIZE.width); x < Math.ceil(right/CHUNK_SIZE.width); x++) {
        for(var y = Math.floor(top/CHUNK_SIZE.height); y < Math.ceil(bottom/CHUNK_SIZE.height); y++) {
          chunks.add({x, y});
        }
      }

      // Gather items that are in the selected chunks.
      var items = [];
      chunks.forEach(({x, y}) => {
        if(this.chunks[x] !== undefined && this.chunks[x][y] !== undefined) {
          items = items.concat(this.chunks[x][y]);
        }
      })

      // Create a set to only return unique items.
      return Array.from(new Set(items));
    }
  }
}

export default {
  state: parseWorld(world)
}