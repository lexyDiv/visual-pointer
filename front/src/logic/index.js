import Contur from "./Contur";
import Crox from "./Crox";
import Point from "./Point";
import UnderState from "./underState";

export let ctx = null;
export let width, height;
export let underState = null;


export function addContext(canvas) {
   ctx = canvas.getContext('2d');

   width = canvas.width;
   height = canvas.height;

   console.log(ctx)
}


setInterval(() => {
    if (ctx) {
        ctx.clearRect(0, 0, width, height);
        if (!underState) {
          underState = new UnderState();
          const contur = new Contur(new Crox(ctx, width / 2, height / 2));
           contur.points.push(new Point(-100, 100));
           contur.points.push(new Point(100, 100));
           contur.points.push(new Point(100, -100));
           contur.points.push(new Point(-100, -100));
          underState.conturs.push(contur);
        }
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
        underState && underState.draw();
    }
}, 30);