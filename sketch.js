
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box,box1,box2,box3;
var boxObject;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(300,1308,1500,10)
	var options = {
       isStatic:false
    }
	box = new Box(500,300,20,20)
	box.shapeColor=color("#ff4fe2")


	box1=createSprite(540,510.5,20,100);
box1.shapeColor=color("#ff0000")

box2=createSprite(750,510.5,20,100);
box2.shapeColor=color("#ff0000")

box3=createSprite(640,553,200,15);
box3.shapeColor=color("#ff0000")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 box.display();
 box1.display();
 box2.display();
 box3.display();
 keyPressed();
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(box.body,box.body.position,{x:650,y:553});
}
}


