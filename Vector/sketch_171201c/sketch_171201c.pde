PVector v1,v2;

void setup(){
  size(500,500);
  v1 = new PVector(10, 20);
  v2 = new PVector(25, 50); 
  
}


void draw(){
  //ellipse(v1.x, v1.y, 12, 12);
  ellipse(v2.x, v2.y, 12, 12);
  v2.add(v1);
  ellipse(v2.x, v2.y, 24, 24);
  
}