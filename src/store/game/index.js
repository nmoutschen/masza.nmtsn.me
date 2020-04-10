import world from './world.json';

const CHUNK_SIZE = {"width": 128, "height": 128};

function itemsByChunk(items, world) {
  var chunks = {};
  for(var x = 0; x < Math.ceil(world.width/CHUNK_SIZE.width); x++) {
    chunks[x] = {};
    for(var y = 0; y < Math.ceil(world.height/CHUNK_SIZE.height); y++) {
      chunks[x][y] = new Array();
    }
  }

  items.forEach((item) => {
    (new Set([
      {x: Math.floor(item.box.left/CHUNK_SIZE.width), y: Math.floor(item.box.top/CHUNK_SIZE.height)},
      {x: Math.floor(item.box.right/CHUNK_SIZE.width), y: Math.floor(item.box.top/CHUNK_SIZE.height)},
      {x: Math.floor(item.box.left/CHUNK_SIZE.width), y: Math.floor(item.box.bottom/CHUNK_SIZE.height)},
      {x: Math.floor(item.box.right/CHUNK_SIZE.width), y: Math.floor(item.box.bottom/CHUNK_SIZE.height)}
    ])).forEach(({x, y}) => {
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
  
    this.physics = itemType.physics === undefined ? "block" : itemType.physics;
    this.pos = {
      x: item.x,
      y: item.y
    };
    this.type = item.type;

    this.height = itemType.height;
    this.sprite = itemType.sprite;
    this.width = itemType.width;

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
    height: world.height || 512,
    width: world.width || 512,
    items: items,
    chunks: itemsByChunk(items, world),
    itemsWithin({left, top, right, bottom}) {
      var chunks = new Set();
      for(var x = Math.floor(left/CHUNK_SIZE.width); x < Math.ceil(right/CHUNK_SIZE.width); x++) {
        for(var y = Math.floor(top/CHUNK_SIZE.height); y < Math.ceil(bottom/CHUNK_SIZE.height); y++) {
          chunks.add({x, y});
        }
      }

      var items = [];
      chunks.forEach(({x, y}) => {
        if(this.chunks[x] !== undefined && this.chunks[x][y] !== undefined) {
          items = items.concat(this.chunks[x][y]);
        }
      })

      return new Set(items);
    }
  }
}

export default {
  state: parseWorld(world)
}