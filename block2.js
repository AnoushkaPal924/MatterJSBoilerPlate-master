class Bl{
    constructor(x, y) {
        var options = {
         'restitution':0.5,
          // isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
      }
      display(){
        
   
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill ("#4FC1E8");
        
       rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
      }
}