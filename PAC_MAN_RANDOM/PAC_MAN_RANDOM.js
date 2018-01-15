// All declarations
// Location of Ms. Pacman
var xLocation, yLocation;
// Used for opening and closing of the mouth of Ms.Pacman
var openClose;
var nextBall;
var ballColor;
var pointsScored;
var step;
var pacmanspeed;

function setup() {
  step = 1;
  createCanvas(600, 600);
  xLocation =0;
  yLocation =0;
  bx= random(0,600);
  by= 600;
  nextBall =1;
  openClose =4;
  ballColor = color(255);
  pointsScored =0;
  pacmanSpeed =4;
}

function draw() {
  
  noStroke();
  fill(0,0,0,30);
  rect(0,0,600,600);
  textSize(32);
  fill(0, 102, 153);
  text ("R - for Reset",300,50);
  
  // Code for Moving using arrows
  if(keyIsDown(RIGHT_ARROW)){
    xLocation = xLocation + pacmanSpeed;  
  }
  if(keyIsDown(LEFT_ARROW)){
    xLocation = xLocation - pacmanSpeed;
  }
  
  if(keyIsDown(UP_ARROW)){
    yLocation = yLocation - pacmanSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    yLocation = yLocation + pacmanSpeed;    
  }

  // Moving Object Design goes here .. Ms.Pacman
  noStroke();
  fill(255,255,0,255);
  ellipse(xLocation,yLocation,50,50);  
  fill(0,0,0,255);
  arc(xLocation,yLocation,50,50,0,openClose/10);
  fill(0,0,0);
  ellipse(xLocation + 5,yLocation - 10,10,10);
  openClose = openClose - 0.25;
  if(openClose == 0) {
      openClose =4;
  }
  
  // Random balls being thrown from below
  fill(ballColor);
  ellipse(bx,by,20,20);
  by = by-step;
  
  if(by <= 0) {
     bx= random(100,500);
     by=600;
     step = random(0.5, 2);
     ballColor = color(random(0,255),random(0,255),random(0,255));
    }
    text("Points : " +pointsScored , 100,100);
    
    // Code for Capturing the flying balls and keeping score
    // Once balls are captured we need to launch the next ball
    
    if(xLocation >= bx-20 && xLocation <=bx+20 && yLocation >= by-20 && yLocation <= by +20) {
     pointsScored = pointsScored +1; 
     by=0;
    }
}

// Code for keys
function keyPressed() {
  if(key == 'R' || key =='r')
  setup();
}
  

