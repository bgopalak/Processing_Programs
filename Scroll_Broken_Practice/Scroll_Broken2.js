//project by mr. marchese & mr. lucey

var target1;
var target2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  target1 = new Target(50, 50, 100);
  target2 = new Target(150, 175, 100);
}

function draw() {
  background(62, 247, 236);
  target1.show();
  target1.move();
  target2.show();
  target2.move();
}

class Target {
  constructor(x, y, tempSize) {
    this.x = x;
    this.y = y;
    this.size = tempSize;
  }
  move() {
    this.x = this.x + 1; //changing value simulates movement
    if (this.x >= windowWidth) {
      this.x = 0;

    }
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, this.size / 1.7, this.size / 1.7);
    fill(255, 0, 0, 10);
    ellipse(this.x, this.y, this.size / 2, this.size / 2);
    fill(0, 255, 0, 50);
    ellipse(this.x, this.y, this.size / 3, this.size / 3);
    fill(0, 0, 255, 100);
    ellipse(this.x, this.y, 100, 100);
  }
}
