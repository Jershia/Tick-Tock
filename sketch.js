var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(600,500);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 

  fill("white");
  textSize(20);
  text("12",190,100);

  fill("white");
  textSize(20);
  text("3",300,210);

  fill("white");
  textSize(20);
  text("6",200,310);

  fill("white");
  textSize(20);
  text("9",100,215);

  fill("white");
  textSize(20);
  text("1",260,120);

  fill("white");
  textSize(20);
  text("2",290,160);

  fill("white");
  textSize(20);
  text("4",290,260);

  fill("white");
  textSize(20);
  text("5",250,300);

  fill("white");
  textSize(20);
  text("7",150,305);

  fill("white");
  textSize(20);
  text("8",110,265);

  fill("white");
  textSize(20);
  text("10",95,160);  

  fill("white");
  textSize(20);
  text("11",130,115);

  hr = hour();
  mn = minute();
  sc = second();

  stroke("yellow");
  strokeWeight(5);
  textSize(35);
  fill("red");
  text("Time - " + hr + " : " + mn + " : " + sc,100,430);

  translate(200,200);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,-0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,55,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

  stroke("yellow");
  point(0,0);

  drawSprites();
}