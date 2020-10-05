class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = pointB
        this.sling = constraint.create(options);
        // this.sling1 = loadImage("sprites/sling1.png");
        // this.sling2 = loadImage("sprites/sling2.png");
        // this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        // image(this.sling1, 200, 20);
        //image(this.sling2, 170, 20);
        

         if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("#301608");
            if (pointA.x<220){
                
            strokeWeight(7);
             line(pointA.x-25, pointA.y, pointB.x-5, pointB.y);
             line(pointA.x-25, pointA.y, pointB.x+30, pointB.y);
             //image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
            }
            else{
                
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
                
            }
        }
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
}