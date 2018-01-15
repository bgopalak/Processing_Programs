float x,y;
float b2,b3;
PImage img;
//Second Quadrant Variables
float SQx,SQy;
//Thrid Quadrant variables
float TQx,TQy;
//Fourth Quadrant variables
float FQx,FQy;

void setup(){
  x=0;
  SQx=250;
  TQx=0;
  TQy=400;
  FQx=0;
  stroke(2);
  //translate(250,250);
  line(250,0,250,500);
  line(0,250,500,250);
  size(500,500);
  img=loadImage("SlideBG.png");
}

void draw() {
  background(img);
  
  noStroke();
   y= -2.046*pow(10,-12)+3.83333*x-0.08466*pow(x,2)+0.000968*pow(x,3)-0.00000453*pow(x,4)+7.3333*pow(x,5)*pow(10,-9);  
   fill(255,255,0);
   ellipse(x+8,y,10,10);
    b2=x-20;
    y= -2.046*pow(10,-12)+3.83333*b2-0.08466*pow(b2,2)+0.000968*pow(b2,3)-0.00000453*pow(b2,4)+7.3333*pow(b2,5)*pow(10,-9); 
    fill(0,255,255);
    ellipse(b2+8,y,10,10);
    
    b3=x+20;
    y= -2.046*pow(10,-12)+3.83333*b3-0.08466*pow(b3,2)+0.000968*pow(b3,3)-0.00000453*pow(b3,4)+7.3333*pow(b3,5)*pow(10,-9); 
    fill(255,255,255);
    ellipse(b3+8,y,10,10);
    
   x=x+0.5;
    
   if(x>320)
   {
     x=0;
   }
}