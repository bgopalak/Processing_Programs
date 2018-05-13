var xPoints = [];
var yPoints = [];
var rippleWidth = 0;
var xPt, yPt;
var t;

function setup() {
  createCanvas(500, 500);
  smooth();
  background(64, 164, 223, 170);
  xPoints[0] = 250;
  yPoints[0] = 250;
  t = 0;

  for (var i = 1; i <= 4; i++) {
    xPoints[i] = i * 100;
  }
  for (var i = 1; i <= 4; i++) {
    yPoints[i] = i * 100;
  }
}

function draw() {
  background(64, 164, 223, 170);
  noFill();
  strokeWeight(1);
  stroke(100, 170, 235, 255);
  //stroke(random(90, 110), random(160, 180), random(225, 245), 255);
  for (var x = 1; x <= 4; x++)
    for (var y = 1; y <= 4; y++) {
      for (var k = 0; k <= 5; k++) {
        stroke(random(0, 110), random(0, 180), random(0, 245), 255);
        ellipse(xPoints[x], yPoints[y], k * t * 50, k * t * 50);
        //drawPoint(xPoints[y], yPoints[y])
      }
    }
  t = t + 0.005;
  if (t >= 3) {
    t = 0;
  }
}

function drawPoint(xPt, yPt) {
  ellipse(75 * sin(xPt), 75(yPt), 12, 12);
}

function mouseClicked() {
  setup();
  /*
  background(64, 164, 223, 170);

  for (var i = 0; i < 10; i++) {
    stroke(255, 255);
    ellipse(mouseX, mouseY, rippleSize[i], rippleSize[i]);
    rippleSize[i] = rippleSize[i] + 1;
  }
  */
}
