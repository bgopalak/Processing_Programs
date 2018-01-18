float x=0;

void setup() {
  size(600,600);
  //colorMode(RGB, 360, 100, 100);
  int i =0;
  float x= 0;
  noStroke();
  /*fill(255,0,0,150);
  rect(0,0,200,600);
  fill(0,255,0,150);
  rect(200,0,400,600);
  fill(0,0,255,150);
  rect(400,0,600,600);*/
  background(103);
}

void draw() {
  int i = 0;
  //background(103);
  //fill(0,0,0,5);
  //rect(x,0,x+200,600);
  background(0);
  while(i<=200){
    fill(random(50,255),random(10,255),random(100,255),100);
    x = random(75,125);
    ellipse(random(0,600),random(0,600),x,x);
    fill(random(0,255),random(0,255),random(0,255),70);
    rect(random(0,600),random(0,600),random(0,600),random(0,600));
    i=i+1;
  }
  delay(1000);



}
