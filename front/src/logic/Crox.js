import { ctx, delta, mashtab } from ".";

class Crox {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.conturs = [];
  }

  draw() {
 
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "red";
    ctx.moveTo((this.x + delta.x) * mashtab, (this.y + delta.y) * mashtab);
    ctx.lineTo((this.x + delta.x) * mashtab, (this.y + delta.y) * mashtab - 10000);
    ctx.lineTo((this.x + delta.x) * mashtab, (this.y + delta.y) * mashtab + 10000);
    ctx.lineTo((this.x + delta.x) * mashtab + 10000, (this.y + delta.y) * mashtab);
    ctx.lineTo((this.x + delta.x) * mashtab - 10000, (this.y + delta.y) * mashtab);
    ctx.stroke();
    // ctx.fillStyle = "red";
    // ctx.fillRect((this.x + delta.x), (this.y + delta.y), 50, 50);
  }
}

export default Crox;
