import { ctx, height, width } from ".";
import Crox from "./Crox";

class UnderState {
    constructor() {
       this.conturs = [];
    }

    draw() {
        
        this.conturs.forEach((contur) => {
           // console.log(contur.crox)
            ctx.save();
          ctx.translate(contur.crox.x, contur.crox.y);
            contur.points.forEach((point, i, arr) => {
              // ctx.fillStyle = "white";
              // ctx.fillRect(point.x, point.y, 5, 5);
              // console.log(point)
              point.draw();
            });
            ctx.restore();
        });
    }
}


//underState.


export default UnderState;