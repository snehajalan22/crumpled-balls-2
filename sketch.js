const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1366, 691);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(1100,500,15,15);
	box2 = new Box(1170,545,15,170);
	box3 = new Box(1015,545,15,170);
	
	ground1 = new Ground(400,650,2200,10);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("white");
	Engine.update(engine);
	
	fill("black");
	textSize(16);
	text("USE UP ARROW KEYS TO MOVE THE PAPER", 200,100);
	text("GOAL: PUT PAPER IN THE DUSTBIN", 200,120);
  
  
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,445,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



