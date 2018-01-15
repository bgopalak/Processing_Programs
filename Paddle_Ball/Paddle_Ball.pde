PVector location;
PVector velocity;
PVector paddle;

void setup() {
  size(200,200);
  smooth();
  background(255);
  location = new PVector(0,0);
  velocity = new PVector(0.5,1);
  paddle = new PVector(0,200);
}

void draw() {
  background(255);
  noStroke();
  fill(255,10);
  rect(0,0,width,height);
  
  fill(0,0,0);
  rect(paddle.x,paddle.y-10,60,10);
  
  // Add the current speed to the location.
  location.add(velocity);
  

  // We still sometimes need to refer to the individual components of a PVector 
  // and can do so using the dot syntax (location.x, velocity.y, etc.)
  
  if ((location.x > width) || (location.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  
  
  /*
  if ((location.y > height) || (location.y < 0)) {
    velocity.y = velocity.y * -1;
  }
  */
  if ((location.y < 0)) {
    velocity.y = velocity.y * -1;
    print("REACHED THE TOP\n");
  }
  
  if((paddle.y-location.y) >=0 && (paddle.y-location.y) <=10 && abs(paddle.x-location.x ) <60)
  {
   print("This is close \n"); 
   
   velocity.y = velocity.y * -1;
  }
print ("BALL X :" +location.x + " BALL Y :" +location.y);
print ("\n");
print ("PADDLE X :" +paddle.x + " PADDLE Y :" +paddle.y);
//print (" x dist : " + abs(paddle.x-location.x));
//print(" y dist: " + abs(paddle.y -location.y));
print ("\n");
  // Display circle at x location
  noStroke();
  //stroke(0);
  fill(175);
  ellipse(location.x,location.y,16,16);
  
  //print(location.dist(paddle));
  //print("\n");
}