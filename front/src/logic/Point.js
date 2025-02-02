import { ctx, delta, mashtab } from ".";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc((this.x + delta.x) * mashtab,
     (this.y + delta.y) * mashtab, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

export default Point;
