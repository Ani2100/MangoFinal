
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage;
function preload()
{
	boyImage = loadImage("Plucking mangoes 4/boy.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground  = new Ground(650, 680, 1300, 20);
	tree = new Tree(700,200,500,500);
	mango1 = new Mango(800,300,50,50);
	stone = new Stone(200,450,30,30);
	slingshot = new Connection(stone.body,{x:200,y:300} );

    

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  image(boyImage,100,450,300,300);
  ground.display();
  tree.display();
  mango1.display();
  stone.display();
  slingshot.display();
 
}

function mouseDragged(){
 Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
 slingshot.fly();
}

