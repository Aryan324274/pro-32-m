
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage

var balls=[]
var manheight=500
function preload(){
  
}

function setup(){
    createCanvas(800, 825);


	engine = Engine.create();
	world = engine.world;

car=new Carsafe(mouseX,400,200,10)
man=new Man(400,670,30,30)
ground=new Ground(400,800,799,10)
log= new Log(404,459,200,100)

for(i=0;i<100;i++){
  balls.push(new Ball(random(0,400),random(1,100)))
 
}

	Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
  background(120,300,-5)

man.display();
ground.display();
log.display();
car.display();

for(i=0;i<100;i++){
  balls[i].display();
  if(ballgroup.isTouching(man)){
    manheight=manheight-50
  }
}



  drawSprites();
    
} 

