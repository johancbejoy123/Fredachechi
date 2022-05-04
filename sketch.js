const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var ball,angle
var save,pn
var body

function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();   
    world = engine.world;
    ball1 = new Rounds(200,300,50)
    ball2 = new Rounds(100,300,50)
    ball3 = new Rounds(150,300,50)
    ball4 = new Rounds(200,300,50)
    ball5 = new Rounds(200,300,50)
    ball6 = new Rounds(200,300,50)
     propertiee={
        restitution:1
    }

    ball = Bodies.circle(200,200,25,propertiee) 
    World.add(world,ball)
    var propertie={
         isStatic:true
    }
    angle=ball.angle
    rotate (angle)
    save = Bodies.rectangle(500,590,900,50,propertie)
    var propertie={
        isStatic:true
   }
   var propertieee={
    restitution:1
}
    pn = Bodies.polygon(100,100,3,50,propertieee)
    World.add(world,save)
    World.add(world,pn)
 


   console.log(ball1)

}
function draw(){
    background("gray");
    Engine.update(engine);
    ellipse(ball.position.x,ball.position.y,100,100)
    rect(save.position.x,save.position.y,400,50)
    triangle(pn.position.x,pn.position.y,pn.position.x+100,pn.position.y,pn.position.x+50,pn.position.y-50)

    ball1.show();
    ball2.show(); 
        ball3.show();   
        ball4.show();      
    ball5.show();   
    ball6.show(); 

}