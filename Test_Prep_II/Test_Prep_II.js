//Code by Callan Moss

var rc;
function setup(){
 createCanvas(600,400); 
 rc=color(255,0,0)
}

function draw(){
 background(0,255,255);
 
 //rainbow - red on outside
 noStroke();
 fill(255,255,0);
 arc(100,300,100,100,radians(180),radians(360));
 fill(0,0,255);
 arc(100,300,50,50,radians(180),radians(360));
 
 //Rainbow - blue on outside
  if(mouseY>300) {
  fill(255,255,0);
  arc(100,300,100,100,radians(180),radians(360));
  fill(255,0,0);
  arc(100,300,50,50,radians(180),radians(360));
  }
 
 //grass
 fill(0,255,0);
 noStroke();
 rect(0,300,width,100);

 //house
 fill(255,200,200);
 stroke(0,0,0);
 strokeWeight(1);
 rect(300,150,100,150);
 
 //smoke
  fill(224,224,224);
  noStroke();
 ellipse(380,110,10,30);
  ellipse(380,90,15,30);
  ellipse(380,70,30,30);
  
  //chimney
  stroke(1);
  fill(150,0,0);
  rect(375,120,10,20);
 rect(370,110,20,10);
 
 //roof
 fill(255,20,20);
 triangle(300,150,400,150,350,100);
 fill(255);
 
 //windows
 rect(310,175,30,30);
 rect(360,175,30,30);

 
 //door
 fill(0);
 rect(335,250,30,50);
 
 //path
  fill(153, 102, 0);
  rect(335,300,30,70);

 
 //mailbox
  fill(0,0,0);
  rect(390,330,15,10);
  fill(153,102,0);
  rect(390,340,3,20);


//clouds
fill(250,250,250);
noStroke();
ellipse(mouseX,mouseY,100,50);
ellipse(mouseX+90,mouseY,100,50);
ellipse(mouseX+45,mouseY+30,100,50);

//sun
fill(255, 255, 0);
stroke(255,255,0);
strokeWeight(10);
line(300, 50, 300 + 50, 75);
line(300, 50, 300, 100);
line(300, 50, 300 - 50, 75);
line(300, 50, 300 + 50, 25);
line(300, 50, 300 - 50, 25);
line(300, 50, 300, 0);
ellipse(300,50,70,70);
}