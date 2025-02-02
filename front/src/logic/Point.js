import { ctx } from ".";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = -y;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
    ctx.fill();
  }
}

export default Point;
