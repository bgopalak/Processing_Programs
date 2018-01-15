var xLocation = 20;
var yLocation = 20;
var bX,bY;
var ballColor;
var step;
var pointScored;
var pointsLost;
var levelNow;
var stepMove;

function setup() {
  step = 2;
  createCanvas(800, 600); 
  bX = 300;
  bY = 600;
  ballColor = color(0,0,255);
  pointScored = 0;   
  pointsLost =0;
  levelNow =1;
  stepMove = 0.7;
}

function draw() {
  noStroke();
  fill(0,0,0,30);
  rect(0,0,600,600);
  fill(255,255,255);
  line(600,0,600,600);
  
  // Display Rules
  textSize(12);
  fill(255,0,0);
  text("1. Use Arrow Keys for moves",605,40);
  text("2. Use 'R' or 'r' to reset game",605,60);
  text("3. Capture 5 in a row for next level",605,80);
  text("4. Miss 3 in a row to go back a level",605,100);
  
  
//Points Scored Display  
  textSize(25);
  fill("white");
  text("POINTS SCORED : " + pointScored,10,40);
  text("POINTS LOST : " + pointsLost,10,80);
  if(pointScored >= 5) {
    pointScored =0;
    levelNow = levelNow +1;
  }
//Arrow-based movements

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
  
  if(yLocation >= 600 || yLocation <=0 ) {
  yLocation =0;  
  }
  if(xLocation >=600 || xLocation <=0) {
  xLocation =0;  
  }
  
  
// Moving Object Design goes here
  noStroke();
  fill(255,255,0,100);
  ellipse(xLocation,yLocation,50,50);  
  fill(0,0,0,300);
  arc(xLocation,yLocation,50,50,0,QUARTER_PI);
  fill(0,0,0);
  ellipse(xLocation + 5,yLocation - 10,10,10);
  
// Random ball moving from bottom to top
  fill(ballColor);
  ellipse(bX,bY,15,15);

  bY = bY - stepMove*levelNow;
 if(bY== 5) { 
 pointsLost = pointsLost+1;
     if(pointsLost >=3){
       setup();
     }
 }
  if(bY <= 0){
    bY = 600;
    bX = random(50,550);
    ballColor = color(random(0,255),random(0,255),random(0,255));
  }
  
  if(xLocation >= bX - 15 && xLocation <= bX + 15 && yLocation >= bY - 15 && yLocation <= bY + 15){
    bY = -20;
    pointScored = pointScored + 1;
  }
}

function keyPressed() {
  if(key == 'w' || key == 'W') {
        yLocation = yLocation - 5;
      }
  if(key == 's' || key == 'S') {
        yLocation = yLocation + 5;
      }
  if(key == 'd' || key == 'D') {
        xLocation = xLocation + 5;
      }
  if(key == 'a' || key == 'A') {
        yLocation = yLocation - 5;
      }
  if(key == 'r' || key == 'R') {
        setup();
      }
}