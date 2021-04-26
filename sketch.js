const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggi1,boggi2,boggi3,boggi4,boggi5,boggi6;
var chain1,chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;
var rock1,rock2,rock3;


function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggi1=new Boggi(50,170,50,50); 
  boggi2=new Boggi(150,170,50,50); 
  boggi3=new Boggi(250,170,50,50); 
  boggi4=new Boggi(350,170,50,50); 
  boggi5=new Boggi(450,170,50,50); 
  boggi6=new Boggi(550,170,50,50);

  rock1= new Rock(1100,200,100,100);

  chain1= new Chain(boggi1.body,boggi2.body);
  chain2= new Chain(boggi2.body,boggi3.body);
  chain3= new Chain(boggi3.body,boggi4.body);
  chain4= new Chain(boggi4.body,boggi5.body);
  chain5= new Chain(boggi5.body,boggi6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);


  ground.show();
  boggi1.show();
  boggi2.show();
  boggi3.show();
  boggi4.show();
  boggi5.show();
  boggi6.show();

  rock1.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();


 var collision = Matter.SAT.collides(boggi6.body,rock1.body);
 
 if (collision.collided) {
   flag = 1;
 }
 if (flag === 1) {
  textSize(30); 
  stroke(3); 
  fill('blue'); 
  text("CRASH",500,200); 
  crashSound.play();

 }

  }

function keyPressed() {
  if(keyCode === RIGHT_ARROW){ 
    Matter.Body.applyForce(boggi6.body,{x:boggi6.body.position.x,y:boggi6.body.position.y}, 
      {x:0.5,y:0}); 
      trainSound.play(); 
    }
  }