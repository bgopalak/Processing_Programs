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

public class WhileLoop extends PApplet {

Circle[] C =  new Circle [100];
int i = 0;
int flip = 0;

public void setup() {
  
  colorMode(HSB, 360, 100, 100);
  int x;
  while (i < 100){
    C[i]= new Circle(random(10,350),random(10,350),random(10,35));
    C[i].speed(random(-2,2));
    x = color(random(100,255),random(40,100),random(0 ,75),255);
    C[i].changeColor(x);
    i++;
  }
}

// Just simple movements
public void draw(){
  background(103);
  i = 0;
  while(i < 100)
  {
    stroke(C[i].clr);
    line(0,0,C[i].x,C[i].y);
    C[i].show();
    C[i].move();
    i++;
  }
/*
    if(flip ==0){
      C[i].x= C[i].x+C[i].speed;
    }
    else{
      C[i].x = C[i].x-C[i].speed;
    }
  }
  if(flip ==0)
    flip = 1;
  else
    flip = 0;
    */
}


// Circle Class. All definitions go here
class Circle {
float x,y;
float diameter;
float speed;
int clr;

Circle(float xPos, float yPos, float size ){
  x= xPos;
  y= yPos;
  diameter = size;
  speed = 0.1f;
  }
public void change(float xPos, float yPos, float size ){
  x= xPos;
  y= yPos;
  diameter = size;
  //speed = 0;
  }

public void show(){
  //fill(255,0,0);
  fill(clr);
  noStroke();
  ellipse(x,y,diameter/2,diameter/2);
  }

public void changeColor(int c){
  clr = c;
  }

public void speed(float sp){
  speed = sp;
  }

public void move() {
  x = x+speed;
  if(x >= 400+diameter)
    x=0;
}
}
  public void settings() {  size(400,400); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "WhileLoop" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
