float x=0;
int i = 0;

// Setup with pretty much nothing. Except noStroke
void setup() {
  size(600,600);
  noStroke();
}

// Draw keeps refreshing every 2 seconds.

void draw() {
  background(0);
  while(i<=200){
      fill(random(50,255),random(10,255),random(100,255),100);
      x = random(75,125);
      ellipse(random(0,600),random(0,600),x,x);
      fill(random(0,255),random(0,255),random(0,255),70);
      rect(random(0,600),random(0,600),random(0,600),random(0,600));
      i=i+1;
    }

// Name on the front of the screen
  //fill(100,100,0,200);
  textSize(40);
  text("SHREYA Balaji",200,200);
  delay(2000);
  i= 0;
}
