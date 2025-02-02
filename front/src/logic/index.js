import Contur from "./Contur";
import Crox from "./Crox";
import Point from "./Point";
import UnderState from "./underState";

export let ctx = null;
export let width, height;
export let underState = null;
export let mashtab = 1;
export const delta = {
  x: 0,
  y: 0,
  cdX: 0,
  cdY: 0,
  cdSaveX: 0,
  cdSaveY: 0
     };
let centerScrollPoint, scrollPoint; //= {x: width / 2, y: height /2};
export const mouseData = {x: width / 2, y: height /2};
let centerPoint;

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;
  mouseData.x = clientX * (width / innerWidth);
  mouseData.y = clientY * (height / innerHeight);

 // console.log(clientX, clientY);
 // console.log(innerWidth)
});

document.addEventListener('click', () => {

  //  const dX = (centerPoint.x + delta.x) * mashtab - mouseData.x;
  //  const dY = (centerPoint.y + delta.y) * mashtab - mouseData.y;
  // // console.log(dX / mashtab)

  //    scrollPoint.sx = centerPoint.x - (dX / mashtab);
  //    scrollPoint.sy = centerPoint.y - (dY / mashtab);

 
});

export function mashtaber(deltaY) {


  const dX1 = (centerPoint.x + delta.x) * mashtab - mouseData.x;
  const dY1 = (centerPoint.y + delta.y) * mashtab - mouseData.y;
 // console.log(dX / mashtab)

if (!scrollPoint.time) {
  scrollPoint.sx = centerPoint.x - (dX1 / mashtab);
  scrollPoint.sy = centerPoint.y - (dY1 / mashtab);
}

scrollPoint.time = 20;
/////////////////

  deltaY > 0 ? mashtab -= 0.3 : mashtab += 0.3;


//if (!scrollPoint.time) {
const sd = scrollPoint.sx - scrollPoint.x;
const sY = scrollPoint.sy - scrollPoint.y;
const dis = Math.sqrt(sd * sd + sY * sY);
const conor = Math.atan2(sY, sd);
const spd = 30;
  if (dis > spd * mashtab) {
    scrollPoint.x += Math.cos(conor) * (spd * mashtab); //scrollPoint.sx;
    scrollPoint.y += Math.sin(conor) * (spd * mashtab); //scrollPoint.sy;
  } else {
    scrollPoint.x = scrollPoint.sx;
    scrollPoint.y = scrollPoint.sy;
  }
//}

  const mdX = scrollPoint.x//(centerScrollPoint.x + (centerScrollPoint.x - centerPoint.x));
  const mdY = scrollPoint.y//(centerScrollPoint.y + (centerScrollPoint.y - centerPoint.y));
 // console.log(mdX)
  const x = (mdX) * mashtab;
  const y = (mdY) * mashtab;
  const dX = x - mdX;
  const dY = y - mdY;
  delta.x = -dX / mashtab;
  delta.y = -dY / mashtab;


//console.log(delta.x)

}

export function addContext(canvas) {
  ctx = canvas.getContext("2d");

  width = canvas.width;
  height = canvas.height;

  console.log(ctx);
}

// document.addEventListener("whell", () => {
//   console.log("here")
// })

 //{ x: width / 2, y: height / 2 };

setInterval(() => {
  if (ctx) {
    ctx.clearRect(0, 0, width, height);
    if (!centerPoint) {
      centerPoint = { x: width / 2, y: height / 2, sx: width/2, sy: height/2 };
     // centerScrollPoint = {x: 0, y: 0};
      scrollPoint = { x: width / 2, y: height / 2, sx: width/2, sy: height/2, time: 0  };
    }
    if (!underState) {
      underState = new UnderState();
      const crox = new Crox(width / 2, height / 2);
      const contur = new Contur();
      contur.points.push(new Point(crox.x - 100, crox.y + 100));
    //  console.log(contur.points[0]);
      contur.points.push(new Point(crox.x + 100, crox.y + 100));
      contur.points.push(new Point(crox.x + 100, crox.y - 100));
      contur.points.push(new Point(crox.x - 100, crox.y - 100));
      crox.conturs.push(contur);
      underState.croxes.push(crox);
    }

    

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "red";

    ctx.fillRect((centerPoint.x + delta.x) * mashtab, (centerPoint.y + delta.y) * mashtab, 10, 10);
    //ctx.fillRect(centerPoint.x, centerPoint.y, 10, 10);
///////
    ctx.fillStyle = "violet";
    ctx.fillRect((scrollPoint.x + delta.x) * mashtab, (scrollPoint.y + delta.y) * mashtab, 10, 10);
    // ctx.fillStyle = "green";
    // ctx.fillRect((mouseData.x + delta.x) * mashtab, (mouseData.y + delta.y) * mashtab, 10, 10);
  ///////// 

    underState && underState.draw();


   // console.log(x)


   // mashtab += 0.001;
  // delta.x += 1;
  // console.log(delta.x)
  scrollPoint.time && scrollPoint.time --;
  }
}, 30);
