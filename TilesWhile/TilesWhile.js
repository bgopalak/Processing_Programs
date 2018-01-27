var x;
var y;
var circleSize = 30;
var i, j;

function setup() {
  createCanvas(600, 600);
  background(103);
  noStroke();
}

function draw() {
  i = 0;
  j = 0;
  background(103);

  while (i <= mouseX / circleSize) {
    while (j <= mouseY / circleSize) {
      fill(i * 3, j * 15, 100, j * 10, 255);
      ellipse(i * 30, j * 30, 30, 30);
      j = j + 1;
    }
    j = 0;
    i = i + 1
  }
  i = 0;
}
