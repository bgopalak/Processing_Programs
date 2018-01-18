float x=0;

void setup() {
  size(600,600);
  noStroke();
}

void draw() {
  int i = 0;
  background(0);

  while(i<=200){
      fill(random(50,255),random(10,255),random(100,255),100);
      x = random(75,125);
      ellipse(random(0,600),random(0,600),x,x);
      fill(random(0,255),random(0,255),random(0,255),70);
      rect(random(0,600),random(0,600),random(0,600),random(0,600));
      i=i+1;
    }

  fill(100,100,0,100);
  textSize(40);
  text("SHREYA Balaji",200,200);
  delay(2000);
}
