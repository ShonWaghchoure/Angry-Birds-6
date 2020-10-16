class Base{

    
        constructor(x, y, w, height, angle) {
          var options = {
            'restitution': 0.1,
            'friction': 0.6,
            'density': 0.2,
            
          }
          this.body = Bodies.rectangle(x, y, w, height, options);
          this.width = w;
          this.height = height;
          this.image = loadImage("images/base.png");

          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
    }