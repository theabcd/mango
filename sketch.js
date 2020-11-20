
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy,tree
var stone,slingShot,slingShot2,slingShot3,slingShot4
var mango1,mango2

function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(400,650,20)
mango1=new Mango(600,400,20)
mango2=new Mango(650,450,20)
slingShot=new Slingshot(stone.body,{x:200,y:470})
slingShot2=new Slingshot(mango1.body,{x:600,y:470})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER)
  image(boy,400,650,200,200)
  image(tree,600,500,400,500)
  stone.display();
  mango1.display();
  mango2.display();
  slingShot.display();


  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
launcherObject.attach(stone.body)
  }
}

function detectCollision(Lmango,Lstone){
  mangoBodyPostion=lmango.body.position
  stoneBodyPostion=lstone.body.position
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPostion.x,mangoBodyPostion.y)
  if(distance<+lstone.r+lmango.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}