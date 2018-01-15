class Drop {
  float x = random(width);
  float y =random(-20,0);
  float yspeed =random(0.2,1);
  
  void fall(){
    y=y+yspeed;
    if(y>height)
      y= random(-20,0);
  }
  
  void show(){
    stroke(138,43,226);
    //line(x,y,x,y+10);
    noStroke();
    fill(0,200,200);
    ellipse(x,y,5,5);

  }
}