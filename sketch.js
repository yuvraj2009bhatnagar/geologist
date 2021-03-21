
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,rur;
var ground,balls;
var stone1,iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(700,320,150,50);
	ground = new Ground(600,height,1200,20)
 stone1 = new Stone(800,150,150,150)
iron1 = new Iron(400,110,100,50)
rur = new Rubber(20,20,10)
balls = new sand(10,10,5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  



  box1.display();
ground.display();
stone1.display();
iron1.display();
rur.display();
balls.display();


  drawSprites();
 
}



