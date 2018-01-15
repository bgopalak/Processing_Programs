var x=0;
function setup() {
createCanvas(500,500);

stroke(255);
}

function draw() {
  background(51);
  stroke(255);
  translate(width/2,height);
  
  branch(random(100,100),x);
  //x= x+0.1;
}

function branch(len,x){
      //stroke(random(0,255),random(0,255),random(0,255));
      // Color of the Branch.
      
      if(len<10) {
        stroke(0,0,255);
      }
      else {
        stroke(255);
      }
      strokeWeight(len*0.15);
      line(x,0,x,-len);
      fill(255);
      translate(x,-len);
      
  if(len>10){
    push();
    rotate(PI/8);
    branch(len*0.8,x);
    pop();
    
    push();
    rotate(-PI/8);
    branch(len*0.8,x);
    pop();
    x=x+10;
  }
}