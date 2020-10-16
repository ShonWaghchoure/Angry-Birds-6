class Pig extends Base{

    constructor(x,y){
        super(x, y, 80, 80);

        this.image = loadImage("images/enemy.png");

        this.visibility = 255;



    }

    display(){

        

        if(this.body.speed<3){

            super.display();



        }
        else{
        
            World.remove(world, this.body);
            push();
            this.visibility-=5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 80, 80);
            pop();

        }



    }

}




