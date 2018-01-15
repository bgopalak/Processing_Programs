float[] x;
float[] y;
float[] z;

void setup(){
  
  x= new float[1000];
  y= new float[1000];
  z = new float[1000];
  size (500,500);
  int i=0;
  while (i < 1000){
   x[i] = random(1,500);
   y[i]= random(1,500);
   z[i] = random(0.5, 1);
    i=i+1;
  }
 
}

void draw(){
  background(0,0,0);
  stroke(random(1,255));
  int i=0;
  while(i< 1000)
  {
  noStroke();
  fill(255,255,255);
  ellipse(x[i],y[i],5,5);
  //point(x[i],y[i]);
  fill(0,2);
  rect(0,0,500,500);
  y[i]= y[i] + z[i];
  
  if(y[i] > 500)
    {
       y[i] = random(-100,0);
    }
  i++;
  
  }

}