const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygonObj;

var launcherObject;
var launchForce = 100;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(440,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(350,275,30,40);
  console.log(block1);
  block2 = new Block(380,275,30,40);
  block3 = new Block(410,275,30,40);
  block4 = new Block(440,275,30,40);
  block5 = new Block(470,275,30,40);
  block6 = new Block(500,275,30,40);
  block7 = new Block(530,275,30,40);
  //level two
  block8 = new Block(380,235,30,40);
  block9 = new Block(410,235,30,40);
  block10 = new Block(440,235,30,40);
  block11 = new Block(470,235,30,40);
  block12 = new Block(500,235,30,40);
  //level three
  block13 = new Block(410,195,30,40);
  block14 = new Block(440,195,30,40);
  block15 = new Block(470,195,30,40);
  //top
  block16 = new Block(440,155,30,40);

  //block17 = new Block(700,150,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  polygonObj = new Polygon(90,250,20)

  launcherObject = new Launcher(polygonObj.body,{x:90, y:250})

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  
  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 //block17.display();
  
 blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
 
  launcherObject.display();
  polygonObj.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygonObj.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
launcherObject.fly();
}

function keyPressed(){
  if(keyDown =32){
    launcherObject.attach(polygonObj.body)
  }
}