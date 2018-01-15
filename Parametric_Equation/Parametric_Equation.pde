// Try to do Parametric Equations.
float x;
float y;
float t=1;

void setup() {
  size(500,500);
  background(0);
}

void draw(){
  fill(0,3);
  rect(0,0,500,500);
  //rotate(PI/100+t);
  //pushMatrix();
  translate(width/2,height/2);
  //stroke(random(0,255),random(0,255),random(0,255));
  stroke(255,255,255);
  strokeWeight(2);
  point(OneX(t),OneY(t));
  //point(OneY(t),OneX(t));
  /*
  ellipse(OneX(t),OneY(t),50,50);
  popMatrix();
  pushMatrix();
  translate(100,100);
  stroke(0,255,0);
  point(OneY(t),OneX(t));
  popMatrix();
  */
  //fill(random(200,255),random(200,255),random(200,255));
  //line(OneX(t),OneY(t),OneY(t),OneX(t));
  t=t+0.3;

}

float OneX(float x){
 return sin(x/5)*50 +sin(x/15)*50+cos(x/115)*25; 
}

float OneY(float y){
 return cos(y/5)*50+cos(y/15)*50+sin(x/115)*25;
}