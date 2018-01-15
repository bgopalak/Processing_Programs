void setup() {
size(500,500);

stroke(255);
}

void draw() {
  background(51);
  stroke(255);
  translate(width/2,height);
  branch(float(100));

  
}

void branch( float len){
      //stroke(random(0,255),random(0,255),random(0,255));
      stroke(255);
      strokeWeight(len/3);
      line(0,0,0,-len);
      translate(0,-len);
      
  if(len>14){
    pushMatrix();
    rotate(PI/8);
    branch(len*0.8);
    popMatrix();
    pushMatrix();
    rotate(-PI/4);
    branch(len*0.8);
    popMatrix();
  }
  
}