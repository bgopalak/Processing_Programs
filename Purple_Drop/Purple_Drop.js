Drop d;
function setup() {
    background(230,230,250);

  size(640,360);
  createCanvas(500,500);
  d = new Drop();
}

function draw() {
  background(230,230,250);
  ellipse(50, 50, 80, 80);
  d.fall();
  d.show();
}