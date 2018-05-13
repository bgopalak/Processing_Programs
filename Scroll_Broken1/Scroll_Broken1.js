//project by mr. marchese & mr. lucey

var target1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  target1 = new Target();
}

function draw() {
  target1.show();
  //background(62, 247, 236);
  background(103);
  target1.move();
}

class Target {
  constructor(tempSize) {
    this.x = 100;
    this.y = 100;
    this.size = 200;
  }
  move() {
    this.x = this.x + 1; //changing value simulates movement
  }
  show() {
    stroke(255);
    fill("blue");
    ellipse(this.x, this.y, this.size / 1.7);
    ellipse(this.x, this.y, this.size / 2);
    ellipse(this.x, this.y, this.size / 3);
    ellipse(this.x, this.y, 100, 10);
  }
}
