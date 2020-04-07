var counter = 0;

export default class Item {
  constructor(type, width, height, pos) {
    this.id = counter;
    counter++;
    this.type = type;
    this.width = width;
    this.height = height;
    this.pos = pos;
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