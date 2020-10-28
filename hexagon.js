class Hexagon{
    constructor(x, y, width, height, angle) {
        var options = {
           // 'restitution':0.8,
           isStatic:true,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        // fill ("#4FC1E8");
        rotate(angle);
       rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
}