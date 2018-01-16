Circle[] C =  new Circle [100];
int i = 0;
int flip = 0;

void setup() {
  size(400,400);
  colorMode(HSB, 360, 100, 100);
  color x;
  while (i < 100){
    C[i]= new Circle(random(10,350),random(10,350),random(10,35));
    C[i].speed(random(-2,2));
    x = color(random(100,255),random(40,100),random(0 ,75),255);
    C[i].changeColor(x);
    i++;
  }
}

// Just simple movements
void draw(){
  background(103);
  i = 0;
  while(i < 100)
  {
    stroke(C[i].clr);
    line(0,0,C[i].x,C[i].y);
    C[i].show();
    C[i].move();
    i++;
  }
/*
    if(flip ==0){
      C[i].x= C[i].x+C[i].speed;
    }
    else{
      C[i].x = C[i].x-C[i].speed;
    }
  }
  if(flip ==0)
    flip = 1;
  else
    flip = 0;
    */
}


// Circle Class. All definitions go here
class Circle {
float x,y;
float diameter;
float speed;
color clr;

Circle(float xPos, float yPos, float size ){
  x= xPos;
  y= yPos;
  diameter = size;
  speed = 0.1;
  }
void change(float xPos, float yPos, float size ){
  x= xPos;
  y= yPos;
  diameter = size;
  //speed = 0;
  }

void show(){
  //fill(255,0,0);
  fill(clr);
  noStroke();
  ellipse(x,y,diameter/2,diameter/2);
  }

void changeColor(color c){
  clr = c;
  }

void speed(float sp){
  speed = sp;
  }

void move() {
  x = x+speed;
  if(x >= 400+diameter)
    x=0;
}
}
