const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bg2,bg3,bg4,form,system,code,security;
var jojo,jojoImg,plane,planeImg,p;
var score=0;
var level=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  
  bg2=loadImage("city.jpg")

  //jojoImg=loadImage("solvee.png")
  //planeImg=loadImage("bluePlane.png")

}

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
    world = engine.world;

  security = new Security();
  system = new System();
  plane = new Plane(100,100,160,120);

   /*jojo=createSprite(220,270)
   jojo.addImage(jojoImg)
   jojo.scale=0.6*/

   jojo = new Jojo(220,270,30,200)

}

function draw() {
  background("pink");
  Engine.update(engine);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

//jojo.display();


  //if(score === 3) {
    //level=1;
    //score=0;

    clear()
    background(bg2)
    plane.display();
   
    
  //}


if(keyDown(RIGHT_ARROW))
    {
    Matter.Body.setPosition(plane.body,{x:plane.body.position.x+5,y:plane.body.position.y+0})
    }

  drawSprites()
}
