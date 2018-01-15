Circle c1 = new Circle(200,200,20);
Circle c2 = new Circle(0,300,100);

Circle[] C =  new Circle [100];

int i = 0;

void setup() {
  size(400,400);
  while (i < 100){
    C[i]= new Circle(random(10,350),random(10,350),25);
    i++;
  }
  c1.speed(1);
  c2.speed(2);
}

// Just simple movements
void draw(){
  background(103);
  //c1.change(0,200,100);
  c1.show();
  //c2.change(0,300,100);

  c2.show();
  c1.move();
  c2.move();

  i = 0;
  while(i < 100)
  {
    C[i].show();
    i++;
  }
}


// Circle Class. All definitions go here
class Circle {
float x,y;
float diameter;
float speed;

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
  fill(random(0,255),random(0,255),random(0,255));
  noStroke();
  ellipse(x,y,diameter/2,diameter/2);
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
