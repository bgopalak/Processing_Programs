var dicesize;
var faceValue;
var x;

function setup() {
  createCanvas(600, 600)
  diceSize = 30;
}

function draw() {
  //background(103);
}

function mouseClicked() {
  background(103);
  rollDice();
  print(x);
  noStroke();
  rect(300, 300, diceSize, diceSize, 10);
  stroke(255, 0, 0);
  strokeWeight(3);
  switch (x) {
    case 1:
      point(315, 315);
      break;
    case 2:
      point(310, 315);
      point(320, 315);
      break;
    case 3:
      point(310, 315);
      point(315, 315);
      point(320, 315);
      break;
    case 4:
      point(310, 310);
      point(320, 310);
      point(310, 320);
      point(320, 320);
      break;
    case 5:
      point(310, 310);
      point(320, 310);
      point(310, 320);
      point(320, 320);
      point(315, 315);
      break;
    case 6:
      point(310, 310);
      point(320, 310);
      point(315, 310);
      point(310, 320);
      point(320, 320);
      point(315, 320);
      break;
  }
}

function rollDice() {
  x = int(random(1, 7));
}
