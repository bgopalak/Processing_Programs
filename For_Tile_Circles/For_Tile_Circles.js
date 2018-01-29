var circleSize = 20;
var i, j;
var k;
var randomColor;

function setup() {
  createCanvas(600, 600);
  background(103);
  noStroke();
  randomColor = 1;
  k = 0;
}

function draw() {
  i = 0;
  j = 0;
  background(103);

  for (i = 0; i <= mouseX / circleSize; i = i + 1) {
    for (j = 0; j <= mouseY / circleSize; j = j + 1) {
      if (randomColor == 1) {
        fill(i * 6, j * 30, 100, j * 8, 255);
      } else {
        //fill(random(0, 255), random(0, 255), random(0, 255), random(5, 100));
        fill(i * 15, j * 3, 100, (i * j / 2 * 7), 100);
      }
      ellipse(i * circleSize, j * circleSize, circleSize, circleSize);
    }
  }
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    if (randomColor == 1)
      randomColor = 0;
    else
      randomColor = 1;
  }

}
