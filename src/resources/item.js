var counter = 0;

export default class Item {
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