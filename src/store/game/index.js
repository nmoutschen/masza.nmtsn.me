import home from './home.json';

var counter = 0;

class Item {
  constructor(type, width, height, pos, physics=true) {
    this.id = counter++;
    this.type = type;
    this.width = width;
    this.height = height;
    this.pos = pos;
    this.physics = physics;
  }

  get collisionBox() {
    return {
      fromX: this.pos.x - this.width/2,
      toX: this.pos.x + this.width/2,
      fromY: this.pos.y - this.height,
      toY: this.pos.y
    }
  }
}

function parseWorld(world) {
  var game = {
    height: world.height || 512,
    width: world.width || 512,
    items: world.items.map((item) => {
      return new Item(
        item.type,
        world.itemTypes[item.type].width,
        world.itemTypes[item.type].height,
        {
          x: item.x,
          y: item.y
        },
        world.itemTypes[item.type].physics
      )
    })
  }

  console.log(world);
  return game;
}

export default {
  state: parseWorld(home)
}