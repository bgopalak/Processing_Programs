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

public class StainedGlass extends PApplet {

float x=0;
int i = 0;

// Setup with pretty much nothing. Except noStroke
public void setup() {
  
  noStroke();
}

// Draw keeps refreshing every 2 seconds.

public void draw() {
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
  public void settings() {  size(600,600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "StainedGlass" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
