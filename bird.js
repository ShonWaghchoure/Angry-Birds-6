class Bird extends Base{

    constructor(x,y){
        super(x,y,100,100);
        this.image = loadImage("images/bird.png");
        this.smoke = loadImage("images/smoke.png");
        this.trajectory = [];


    }

    display(){

        /*this.body.position.x=mouseX;
        this.body.position.y=mouseY;*/
        if(this.body.position.x>600&&this.body.speed>10){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);

        }

        
        for (var x=0; x< this.trajectory.length; x++){
        image(this.smoke, this.trajectory[x][0], this.trajectory[x][1]);
        }

        
    


        super.display();
    }
}