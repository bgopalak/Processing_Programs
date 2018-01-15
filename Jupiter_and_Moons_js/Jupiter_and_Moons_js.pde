float angle1;
float lCx,lCy,sCx,sCy,hCx,hCy;
int explosionX;

 void function setup()
 {
  createCanvas(400, 400);
  background("midnightblue");
  angle1=0;

}

void function draw() {
  background("midnightblue");
  //Jupiter and its Moons
  fill(201,144,57);
  ellipse(mouseX,mouseY,50,50);
  
  lCx = 50*cos(angle1*2);
  lCy = 50*sin(angle1*2);
  
  hCx = 100*cos(angle1/2);
  hCy = 100*sin(angle1/2);
  
  sCx = 75*cos(angle1);
  sCy = 75*sin(angle1);
  
  noStroke();
  fill(165,145,134);
  ellipse(mouseX+lCx,mouseY+lCy,9,9);
  fill("white");
  ellipse(mouseX+hCx,mouseY+hCy,12,12);
  fill("blue");
  ellipse(mouseX+sCx,mouseY+sCy,7,7);
  angle1 = angle1+0.01;
  
}