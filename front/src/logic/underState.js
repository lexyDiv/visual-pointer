import { ctx, height, width } from ".";
import Crox from "./Crox";

class UnderState {
  constructor() {
    this.croxes = [];
    this.points = [];
  }

  draw() {
    this.croxes.forEach((crox) => {
      crox.draw();
     // ctx.save();
     // ctx.translate(crox.x, crox.y);
      crox.conturs.forEach((contur) => {
        contur.points.forEach((point, i, arr) => {
          point.draw();
        });
      });
     // ctx.restore();
    });
  }
}

//underState.

export default UnderState;
