var x=0;
function setup() {
createCanvas(500,500);

stroke(255);
}

function draw() {
  background(51);
  stroke(255);
  translate(width/2,height);
  branch(100);
  
}

function branch(len){
      //stroke(random(0,255),random(0,255),random(0,255));
      stroke(255);
      strokeWeight(len*0.2);
      line(0,0,0,-len);
      fill(255);
      translate(0,-len);
  if(len>10){
    push();
    rotate(PI/8);
    branch(len*0.8);
    pop();
    push();
    rotate(-PI/7);
    branch(len*0.8);
    pop();
  }
  x=x+1;
}

function fX(len) {
   return (10*sin(len) + 10*cos(len)) ;
}