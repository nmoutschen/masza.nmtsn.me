import world from './world.json';

var counter = 0;

class Item {
  constructor(sprite, spriteImg, item, itemType) {
    this.id = counter++;
  
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
  }

  get box() {
    return {
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

  var game = {
    height: world.height || 512,
    width: world.width || 512,
    items: world.items.map((item) => {
      return new Item(
        world.sprite,
        spriteImg,
        item,
        world.itemTypes[item.type]
      )
    })
  }

  return game;
}

export default {
  state: parseWorld(world)
}