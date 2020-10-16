class SlingShot {

    constructor(bodyA, pointB){


        var options = {

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10



        }
        this.sling1 = loadImage("images/sling1.png");
        this.sling2 = loadImage("images/sling2.png");
        this.sling3 = loadImage("images/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);




    }

    fly(){

        this.sling.bodyA = null;


    }

    attach(bodyA){

        this.sling.bodyA = bodyA.body;

    }

    display(){

        image(this.sling1, 400, 280, 80, 300);
        image(this.sling2, 345, 255, 80, 200);
        

        if (this.sling.bodyA){
        var A = this.sling.bodyA.position;
        var B = this.sling.pointB;


        if(A.x<=400){

            image(this.sling3, A.x-35, A.y-10, 15, 50);

            strokeWeight(10);
            stroke(51, 24, 10)
            line(A.x-30, A.y+5, B.x, B.y);
            line(A.x-30, A.y+5, B.x+80, B.y+20);

        }
        else {

           image(this.sling3, A.x+35, A.y-15, 15, 50);
           strokeWeight(10);
            stroke(51, 24, 10)
            line(A.x+30, A.y+5, B.x, B.y);
            line(A.x+30, A.y+5, B.x+80, B.y+20);

        }


        


        }

    }



}