import { ctx, delta, height, mashtab, width } from ".";
import Crox from "./Crox";

class UnderState {
  constructor() {
    this.croxes = [];
    this.points = [];
  }

  draw() {
  
    this.croxes.forEach((crox) => {
      crox.draw();
      crox.conturs.forEach((contur) => {
        contur.points.forEach((point, i, arr) => {

///////////////////
ctx.fillStyle = "violet";
ctx.save();
const txtMas = mashtab >= 0.7 ? 22 * mashtab : 22 * 0.7;
ctx.font = `${txtMas}px Verdana`;

const tdd = (String(contur.pointsDis[i].dis).length * txtMas) / 2;

const x = ((point.x) + delta.x) * mashtab;
const y = ((point.y) + delta.y) * mashtab;
//ctx.fillText(i, x + 30, y + 30);
ctx.translate(x, y);
ctx.rotate(contur.pointsDis[i].conor);
ctx.fillText(contur.pointsDis[i].dis,
   ((0 
    + (contur.pointsDis[i].dis / 2)
  ) 
 // + delta.x
) * mashtab,
   ((0 - 10
   // - 30 * mashtab
  ) 
 // + delta.y
) * mashtab);
ctx.restore();
//////////////////

          let point2 = arr[i + 1];
          if (contur.close && !point2) {
            point2 = arr[0];
          }
          if (point2) {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.moveTo(
              (point.x + delta.x) * mashtab,
              (point.y + delta.y) * mashtab
            );
            ctx.lineTo(
              (point2.x + delta.x) * mashtab,
              (point2.y + delta.y) * mashtab
            );
            ctx.stroke();
          }
        });
        contur.points.forEach((point) => {
          point.draw();
        });
      });
    });
  }
}

//underState.

export default UnderState;
