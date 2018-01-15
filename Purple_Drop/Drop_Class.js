class Drop {
  float x = width/2;
  float y =0;
  float yhspeed =1;
  
  void fall(){
    y=y+speed;
  }
  
  void show(){
    stroke(138,43,226);
    line(x,y,x,y+10);
  }
}
