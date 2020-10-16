class Box extends Base {
  constructor(x, y) {
    super(x,y, 120, 120)
    this.image = loadImage("images/wood1.png");    
    World.add(world, this.body);
  }
}
