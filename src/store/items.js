var counter = 0;

class Item {
  constructor(type, width, height, pos, physics=true) {
    this.id = counter;
    counter++;
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

export default {
  state: [
    new Item("couch", 64, 32, {x: 32, y: 512}),
    new Item("dogBed", 32, 32, {x: 112, y: 512}, false),
    new Item("tvStand", 64, 32, {x: 160, y: 512}),
    new Item("tv", 64, 32, {x: 160, y: 480}),
    //new Item("ball", 32, 32, {x: 208, y: 512}),

    new Item("desk", 64, 32, {x: 256, y: 512}),
    new Item("deskTop", 64, 32, {x: 256, y: 480}, false),

    new Item("human1", 32, 64, {x: 336, y: 512}, false),
    new Item("human2", 32, 64, {x: 368, y: 512}, false),

    new Item("keys", 160, 32, {x: 256, y: 256+16}, false),
  ]
}