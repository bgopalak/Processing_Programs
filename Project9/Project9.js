var x = 0;
var circleSize = 30;

function setup() {
  createCanvas(800, 800);
  background(100);
  noStroke();
}

function draw() {
  //fill(100, 5);
  //rect(0, 0, 600, 600);
  //background(103);
  noStroke();
  for (var i = 0; i <= mouseX / circleSize; i = i + 1) {
    for (var j = 0; j <= mouseY / circleSize; j = j + 1) {
      fill(i * 5, j * 10, i * j * 1.1, 255);
      ellipse(i * circleSize, j * circleSize, circleSize, circleSize);
    }
  }

  if (mouseX != pmouseX && mouseY != pmouseY) {
    for (x = 0; x <= 150; x = x + 1) {
      //random circles and rectangles
      fill(random(0, 255), random(0, 255), random(0, 255), random(40, 70));
      noStroke();
      ellipse(random(mouseX, width), random(0, height), random(
        0, circleSize), random(0, circleSize));

      rect(random(0, width), random(mouseX, height), random(0, width),
        random(mouseX, height));

      fill(random(0, 255), random(0, 255), random(0, 255), random(30, 40));

      ellipse(random(0, width), random(mouseY, height), random(
        0, circleSize + 30), random(0, circleSize + 30));

      rect(random(mouseX, width), random(0, height), random(mouseX, width),
        random(0, height));

    }
  }
}
