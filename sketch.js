
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot, Tree, stone ;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 

	Tree = new tree (960,800); 

	stone = new Stone(325,688,50);

	slingshot = new SlingShot(stone.body,{x: 325, y: 688}); 


  mango1 = new Mango(970,280,50);
  mango2 = new Mango(960,490,50);
  mango3 = new Mango(1100,450,50);
  mango4 = new Mango(900,400,50);
  mango5 = new Mango(1000,340,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  //calling all detect funtion collisions 
detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);


  image (boy,300,650,200,200);

  Tree.display();
  stone.display(); 


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  slingshot.display();

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
    
    }
    
    function mouseReleased(){
    
        slingshot.fly();
    }



function detectcollision(lstone,lmango)
{

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stone.body,{x:325,y:688})
    slingshot.attach(stone.body);
  }

}