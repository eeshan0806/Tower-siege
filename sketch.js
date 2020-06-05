const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvasGround,boxGround;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  canvasGround = new Ground(400,390,800,10);
  boxGround =  new Ground (400,300,400,10);

  box1 = new Box(250,275,40,40);
  box2 = new Box(300,275,40,40)
  box4 = new Box(350,275,40,40)
  box5 = new Box(400,275,40,40)
  box6 = new Box(450,275,40,40)
  box7 = new Box(500,275,40,40)
  box3 = new Box(550,275,40,40)
  box8 = new Box(550,230,40,40)
  box9 = new Box(500,230,40,40)
  box10 = new Box(450,230,40,40)
  box11 = new Box(400,230,40,40)
  box12 = new Box(350,230,40,40);
  box13 = new Box(300,230,40,40)
  box14 = new Box(250,230,40,40)
  
}

function draw() {
  background(255,255,255);  
  canvasGround.display();
  boxGround.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

}