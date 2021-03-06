var xLocation, yLocation;
var openClose;
function setup() {
  step = 1;
  createCanvas(600, 600);
  xLocation =0;
  yLocation =0;
  x1=100;
  y1=100;
  x2=200;
  y2=200;
  x3=350
  y3=225;
  x4=450;
  y4=550;
  x=0;
  d1=1;
  d2=1;
  d3=1;
  d4=1;
  openClose =4;
}

function draw() {
  noStroke();
  //background(103);
  fill(0,0,0,30);
  rect(0,0,600,600);
  textSize(32);
  fill(0, 102, 153);
  text ("R - for Reset",300,50);

  if(keyIsDown(RIGHT_ARROW)){
    xLocation = xLocation + step;
  }
  if(keyIsDown(LEFT_ARROW)){
    xLocation = xLocation - step;
  }

  if(keyIsDown(UP_ARROW)){
    yLocation = yLocation - step;
  }
  if(keyIsDown(DOWN_ARROW)){
    yLocation = yLocation + step;

  }
   if(keyisDown('r') {
     setup();
     //d1=1;
     //d2=1;
     //d3=1;
     //d4=1;
   }

  // Moving Object Design goes here .. Ms.Pacman
  noStroke();
  fill(255,255,0,255);
  ellipse(xLocation,yLocation,50,50);
  fill(0,0,0,255);
  //arc(xLocation,yLocation,50,50,0,QUARTER_PI/openClose);
  arc(xLocation,yLocation,50,50,0,openClose/10);
  fill(0,0,0);
  ellipse(xLocation + 5,yLocation - 10,10,10);

  //First Dot
  if(xLocation >=80 && xLocation <=120 && yLocation >= 80 && yLocation <=120){
  d1=0;
  }

  if(d1 == 1) {
  fill(255,0,0);
  ellipse(x1,y1,25,25);
  }
  if(d1 == 0) {
    fill(255,0,0);
    stroke(255,0,0);
    line(fX(x)+x1,fY(x)+y1, 100,100);
  }

  //Second Dot
   if(xLocation >=190 && xLocation <=210 && yLocation >= 190 && yLocation <=210){
  d2=0;
  }

    if(d2 == 1) {
  fill(0,255,0);
  noStroke();
  ellipse(x2,y2,25,25);

  }
  if(d2 == 0) {
    fill(0,255,0);
    stroke(0,255,0);
    line(fX(x)+x2,fY(x)+y2,200,200);
    stroke(255,255,255,255);
   line(x1,y1,x2,y2);
  }

  //Third Dot
   if(xLocation >=340 && xLocation <=360 && yLocation >= 215 && yLocation <=235){
  d3=0;
  }

    if(d3 == 1) {
  fill(0,0,255);
  noStroke();
  ellipse(x3,y3,25,25);
  }
  if(d3 == 0) {
    fill(0,0,255);
    stroke(0,0,255);
    line(fX(x)+x3,fY(x)+y3,350,225);
  }

  //Fourth Dot
   if(xLocation >=440 && xLocation <=460 && yLocation >= 540 && yLocation <=560){
  d4=0;
  }

  if(d4 == 1) {
  fill(0,0,200);
  noStroke();
  ellipse(x4,y4,25,25);
  }
  if(d4 == 0) {
   fill(0,0,200);
   stroke(0,0,200);
    line(fX(x)+x4,fY(x)+y4,450,550);
  }
  x=x+0.2;
  openClose = openClose - 0.25;
  if(openClose == 0) {
      openClose =4;
  }
}

function fX(x) {
  return 20*sin(x);
}

function fY(x) {
  return 20*cos(x);

}
