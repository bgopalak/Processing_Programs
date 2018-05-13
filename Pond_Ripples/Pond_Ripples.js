var rippleSize = [];
var rippleWidth = 0;
var

function setup() {
  createCanvas(500, 500);
  smooth();
  background(64, 164, 223, 170);
  for (var i = 0; i < 5; i++) {
    rippleSize[i] = i * 50;
  }
}

function draw() {

  noFill();
  fill(0, 3);
  rect(0, 0, 500, 500);
  stroke(100, 170, 235, 255);

}

function mouseClicked() {
  isClicked = 1;
  background(64, 164, 223, 170);

  for (var i = 0; i < 10; i++) {
    stroke(255, 255);
    ellipse(mouseX, mouseY, rippleSize[i], rippleSize[i]);
    rippleSize[i] = rippleSize[i] + 1;
  }
}
