class Block{
    constructor(x, y) {
        var options = {
         // 'restitution':0.5,
           //isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,30,30, options);
        this.w = 30;
       this.h = 30;
        World.add(world, this.body);
      }
      display(){
       var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        fill ("#AC92EB");
       rectMode(CENTER);
        rect(0,0, this.w, this.h);
        pop();
      }
    }