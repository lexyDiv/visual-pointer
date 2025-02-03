class Contur {
  constructor() {
    this.points = [];
    this.pointsDis = [];
    this.close = true;
  }
  getPointDis() {
    this.points.forEach((point, i, arr) => {
      let point2 = arr[i + 1];
      if (!point2) {
        point2 = arr[0];
      }
      if (point2) {
        const a = point2.x - point.x;
        const b = point2.y - point.y;
        const conor = Math.atan2(b, a);
        const dis = Math.sqrt(a * a + b * b);
        this.pointsDis.push({ dis, conor });
      }
    });
  }
}

export default Contur;
