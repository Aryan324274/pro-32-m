class Ball {

    constructor(x,y){
    var Options={
   
        'restitution':0.8,
        'friction':0,
        'density':7.8,
        }
    
        this.body=Bodies.circle(x,y,30,Options);
        World.add(world,this.body);
    
       
    }
    
    display(){
    push();
   if(this.body.position.y>800){
 this.body.position.y=0
   }
    fill(300,0,200);
   ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,30,30);
    pop();
    
    }
    
    };