
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/7,20);
	
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

	//bob1 = new Bob(300,400,50);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	//bob5 = new Bob(500,400,50);



	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");

  Engine.update(engine);

  roof.display();
 // bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
 // bob5.display();

 // rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}



