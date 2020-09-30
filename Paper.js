class PAPER{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.5,
        }
        this.x=x
        this.y=y
        this.radius = radius;
        this.image=loadImage("Crumbled Paper.png");
        this.body = Bodies.circle(this.x, this.y, (radius-20)/2, options);
        
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
			 strokeWeight(3);
       fill("red");
       imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			// ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}