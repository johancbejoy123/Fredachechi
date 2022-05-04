const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground, ball;
var box1,string1
function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
    World.add(world, ground);

    var ball_options = {
        restitution: 1
    }

   
    ball = Bodies.circle(100, 100, 20, ball_options);
    World.add(world, ball);
    string1 = new String (ball,{x:100, y:10});
    box1 = new Box(300, 280, 50, 50);
    box2 = new Box(280, 270, 50, 50);
    box3 = new Box(260, 160, 50, 50);
    box4 = new Box(240, 150, 50, 50);
    box5 = new Box(220, 140, 50, 50);
    box6 = new Box(200, 130, 50, 50);
}
    
function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    string1.display()
}