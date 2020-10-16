class Log extends Base{
    constructor(x, y, height, angle) {
      super(x, y,30, height, angle)
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("images/wood2.png");
      World.add(world, this.body);
    }
}
  