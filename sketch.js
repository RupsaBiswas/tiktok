var pos;
var scAngle;
var mnAngle;

var sc,mn,hr;


function setup() {
  createCanvas(400,400);
  
  createSprite(400, 200, 50, 50);
 

  angleMode(DEGREES);
}

function draw() {
  background(0); 

  hr=hour();
  mn=minute();
  sc= second();
  

  
  scAngle= map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(sc,0,60%12,0,360);

   
  

 //drawing second's hand
  push();
  translate(200,200);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
   pop();

   //drawing minute hand.
   push();
  translate(200,200);
  rotate(mnAngle);
  stroke(255,255,0);
  strokeWeight(5);
  line(0,0,75,0);
   pop();
   
//drawing hour hand
translate(200,200);
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);

//arc
noFill();
stroke(255,0,0);
strokeWeight(10);
arc(0,0,300,300,0,scAngle);

//arc2
stroke(0,255,0);
arc(0,0,280,280,0,mnAngle);

//arc3
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);



  drawSprites();
}