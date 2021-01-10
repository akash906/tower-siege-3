const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;
var polygon1;
var sling;



function setup(){
    createCanvas(1000,700);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(500,690,1000,30);
ground2 = new Ground(600,450,180,20);
ground3 = new Ground(900,350,180,20);

box1 = new Box(575,425,30,30);
box2 = new Box(590,425,30,30);
box3 = new Box(605,425,30,30);
box4 = new Box(620,425,30,30);
box5 = new Box(580,400,30,30);
box6 = new Box(595,400,30,30);
box7 = new Box(610,400,30,30);
box8 = new Box(585,375,30,30);
box9 = new Box(600,375,30,30);
box10 = new Box(595,350,30,30);

box11 = new Box(865,325,30,30);
box12 = new Box(880,325,30,30);
box13 = new Box(895,325,30,30);
box14 = new Box(870,300,30,30);
box15 = new Box(885,300,30,30);
box16 = new Box(875,275,30,30);

polygon1 = new Polygon(190,420);

sling = new SlingShot(polygon1.body,{x: 190,y:400});

Engine.run(engine);

}

function draw(){
background("powderblue");


ground1.display();
ground2.display();
ground3.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

polygon1.display();
sling.display();
//console.log(mouseY);
}

function mouseDragged(){
 
       Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
    
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon1.body);
        Body.setPosition(polygon1.body,{x:190,y:420});
    }
}
