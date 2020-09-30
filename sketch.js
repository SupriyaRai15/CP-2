
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin,paperIMG,paper2,bin2,bin3,groundO;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  groundO=new ground(width/2,670,width,20);
    paper= new PAPER(50,400,60)     
    bin= new HOLDER(670,600,20,250);
    bin2= new HOLDER(500,600,20,250);
    bin3= new HOLDER(585,650,200,200);
	 
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();

  groundO.display();
  
  bin3.Image_display();
  bin.display();
  bin2.display();
  
  
  
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-120});
  
  }
}


