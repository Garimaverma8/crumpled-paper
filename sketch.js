
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var groundObject;
var dustbinObj;
var paperObject;

var world,engine;


function setup() {
	createCanvas(1300, 560);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,550,width,20);
  paperObject = new Paper(200,300);
	dustbinObj = new Dustbin(1000,525);

	
	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
 

}

function keyPressed(){
  if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45});
  }
}


