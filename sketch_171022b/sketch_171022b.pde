int i;
void setup() {
  size(400,400);
  i =0;
  background(34);
}

void draw() {
  int x=50;
  noStroke();
  background(148);
  fill(171,255,25,255);
  ellipse(i,339,93,50);
  rect(300,300,100,128);
 
  i=i+1;
  
}