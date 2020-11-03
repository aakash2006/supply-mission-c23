var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1s,rect2s,rect3s,rect1b,rect2b,rect3b;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1s = createSprite(400,650,200,20);
	rect1s.shapeColor=color("red");

	rect2s = createSprite(300,600,20,100);
	rect2s.shapeColor =color("red");

	rect3s = createSprite(500,600,20,100);
	rect3s.shapeColor =color("red");





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	rect1b = Bodies.rectangle(400,650,200,50,{restitution:0.7,isStatic:true});
	World.add(world, rect1b);

	rect2b = Bodies.rectangle(300,600,20,100,{restitution:0.7,isStatic:true});
	World.add(world, rect2b);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	rect1s.depth = packageSprite.depth;
	rect1s.depth = rect1s.depth  -1;
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect1s.x=rect1b.position.x
  rect1s.y=rect1b.position.y
  rect2s.y=rect2s.position.y
  rect2s.x=rect2s.position.x
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



