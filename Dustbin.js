class HOLDER {
    constructor(x, y, width, height) 
    {
      var options = 
      {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Dustin.png")
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
      var ang =this.body.angle;
      rectMode(CENTER);
      fill("white");
      //rect(pos.x,pos.y, this.width, this.height);
      
    }

    Image_display()
    {
      var pos =this.body.position;
      var ang =this.body.angle;
      push();
        translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      
     // rect(pos.x,pos.y, this.width, this.height);
      imageMode(CENTER);
		  image(this.image, 0,-this.height/2,this.width, this.height)
      pop();
    }
  };