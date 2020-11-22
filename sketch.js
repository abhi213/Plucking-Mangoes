const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, launcherObj, treeImage, mangoImage, ground;
var stone, stoneImage, boy, boyImage;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	treeImage = loadImage("images/tree.png");
	boyImage = loadImage("images/boy.png");
	stoneImage = loadImage("images/stone.png");
	mangoImage = loadImage("images/mango.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 690, 1000, 20);
    stone = new Stone(150, 500, 10, stoneImage);
	mango1 = new Mango(900, 450, 10, mangoImage);
	mango2 = new Mango(700, 400, 10, mangoImage);
	mango3 = new Mango(790, 500, 10, mangoImage);
	mango4 = new Mango(840, 350, 10, mangoImage);
	mango5 = new Mango(800, 430, 10, mangoImage);
	launcherObj = new Launcher(stone.body, {x:150, y:580});
	tree = createSprite(800, 500);
	tree.addImage("t", treeImage);
	tree.scale = 0.3;
	boy = createSprite(200, 630);
	boy.addImage("b", boyImage);
	boy.scale = 0.1;
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	Matter.Body.applyForce(stone.body, stone.body.position, {x:20, y:-20});
	launcherObj.fly();
}

function keyPressed() {
    if (keyIsDown(32)) {
		Matter.Body.setPosition(stone.body, {x:150, y:580});
		launcherObj.attach(stone.body);
	}
}

function detectCollision(lstone, lmango) {
    var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}