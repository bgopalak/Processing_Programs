//project by mr. marchese & mr. lucey

var target1;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  target1 = new Target();
}

function draw() {
  background(62, 247, 236);
}

class Target {
  constructor(tempSize) {
    this.x = 0;
    this.size = 200;
  }
  move() {
    this.x = this.x + 0; //changing value simulates movement
  }
  show() {
    fill(0);
    ellipse(this.x, this.y, this.size/1.7);
    fill(255, 0, 0);
    ellipse(0, this.y, this.size/2);
    fill(0);
    ellipse(0, this.y, this.size/3);
    fill(255, 0, 0);
    ellipse(this.x, this.y, 100);
  }
}