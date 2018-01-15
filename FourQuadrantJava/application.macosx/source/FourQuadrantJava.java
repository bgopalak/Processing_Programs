import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class FourQuadrantJava extends PApplet {

float x,y;
float b2,b3;
PImage img;
//Second Quadrant Variables
float SQx,SQy;
//Thrid Quadrant variables
float TQx,TQy;
//Fourth Quadrant variables
float FQx,FQy;

public void setup(){
  x=0;
  SQx=250;
  TQx=0;
  TQy=400;
  FQx=0;
  stroke(2);
  //translate(250,250);
  line(250,0,250,500);
  line(0,250,500,250);
  
  img=loadImage("SlideBG.png");
}

public void draw() {
  background(img);
  
  noStroke();
   y= -2.046f*pow(10,-12)+3.83333f*x-0.08466f*pow(x,2)+0.000968f*pow(x,3)-0.00000453f*pow(x,4)+7.3333f*pow(x,5)*pow(10,-9);  
   fill(255,255,0);
   ellipse(x+8,y,10,10);
    b2=x-20;
    y= -2.046f*pow(10,-12)+3.83333f*b2-0.08466f*pow(b2,2)+0.000968f*pow(b2,3)-0.00000453f*pow(b2,4)+7.3333f*pow(b2,5)*pow(10,-9); 
    fill(0,255,255);
    ellipse(b2+8,y,10,10);
    
    b3=x+20;
    y= -2.046f*pow(10,-12)+3.83333f*b3-0.08466f*pow(b3,2)+0.000968f*pow(b3,3)-0.00000453f*pow(b3,4)+7.3333f*pow(b3,5)*pow(10,-9); 
    fill(255,255,255);
    ellipse(b3+8,y,10,10);
    
   x=x+0.5f;
    
   if(x>320)
   {
     x=0;
   }
}
  public void settings() {  size(500,500); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "FourQuadrantJava" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
