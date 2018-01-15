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

public class CircleMove extends PApplet {


Circle c1 = new Circle(200,200,100);
Circle c2 = new Circle(0,300,100);


public void setup() {
  
  c1.speed(0.2f);
  c2.speed(0.1f);
}

public void draw(){
  background(103);
  //c1.change(0,200,100);
  c1.show();
  //c2.change(0,300,100);

  c2.show();
  c1.move();
  c2.move();
}


// Circle Class
class Circle {
float x,y;
float diameter;
float speed;

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
  fill(255,0,0);
  noStroke();
  ellipse(x,y,diameter/2,diameter/2);
  }

public void speed(float sp){
  speed = sp;
  }

public void move() {
  x = x+speed;
}
}
  public void settings() {  size(400,400); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "CircleMove" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
