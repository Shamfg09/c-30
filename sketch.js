const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bunny;
var bunnyImage;
var backgroundImage;
var fruitImage;
var button;
function preload(){
fruitImage = loadImage("melon.png")
backgroundImage = loadImage("background.png")
bunnyImage = loadImage("Rabbit-01.png")

}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
   
  bunny = createSprite(250,620,20,20)
  bunny.addImage(bunnyImage)
  bunny.scale = 0.2

  rope = new Rope(7,{x:245,y:30});

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  
  fruit_con = new Link(rope,fruit);

  button = createImg("cutButton.png")
  button.position(230,30)
  button.size(50,50)
  button.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(backgroundImage,0,0,width,height)
  
  rope.show();
  ground.show();

  //ellipse(fruit.position.x,fruit.position.y,30,30);
  image(fruitImage,fruit.position.x,fruit.position.y,75,75)

  Engine.update(engine);

  drawSprites() 
}
function drop(){
rope.break()
fruit_con.detach()
fruit_con = null
}
