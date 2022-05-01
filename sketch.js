const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options = {
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2
  }

  ball = Bodies.circle(200, 200, 8, ball_options)
  World.add(world, ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse (ball.position.x, ball.position.y, 8, 8)
  Engine.update(engine);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:1, y:-1})    
  }
}

