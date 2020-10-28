class Ball{
    constructor(x, y, radius,options) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        //this.body = ellipse(x, y, radius, options);
          this.radius = radius
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse( this.body.position.x, this.body.position.y, this.radius);
        pop();
      }
}