//Project by Shreya Balaji
var dicesize;
var faceValue;
var diceNumber;
var diceXLocation;
var diceYLocation;

//Set up location and size of the dice on screen
function setup() {
  createCanvas(600, 600)
  diceSize = 50;
  diceXLocation = 0;
  diceYLocation = 0;
}

//Draw function is redundant here as we have everything done for us in mouseClicked
function draw() {
  //background(103);
}

function mouseClicked() {

  //Two loops of for to display from left to right as well as from top to bottom
  //The dice fill the columns first, before the rows
  for (var diceXLocation = 0; diceXLocation < width; diceXLocation =
    diceXLocation + diceSize) {
    for (var diceYLocation = 0; diceYLocation < height; diceYLocation =
      diceYLocation + diceSize) {

      //Roll the dice to figure out which side of the die should be displayed on screen
      rollDice();
      print("The Number Rolled is  " + diceNumber);
      stroke(255, 255, 255);
      fill(diceNumber * 20, diceXLocation * diceNumber / 20, diceYLocation *
        diceXLocation / 1500);
      rect(diceXLocation, diceYLocation, diceSize, diceSize, 12);
      stroke(255);
      strokeWeight(5);
      //Switch to draw dots on each individual rectangle to simulate each dice
      switch (diceNumber) {
        case 1:
          point(diceXLocation + 25, diceYLocation + 25);
          break;
        case 2:
          point(diceXLocation + 15, diceYLocation + 25);
          point(diceXLocation + 35, diceYLocation + 25);
          break;
        case 3:
          point(diceXLocation + 15, diceYLocation + 25);
          point(diceXLocation + 25, diceYLocation + 25);
          point(diceXLocation + 35, diceYLocation + 25);
          break;
        case 4:
          point(diceXLocation + 15, diceYLocation + 15);
          point(diceXLocation + 35, diceYLocation + 15);
          point(diceXLocation + 15, diceYLocation + 35);
          point(diceXLocation + 35, diceYLocation + 35);
          break;
        case 5:
          point(diceXLocation + 15, diceYLocation + 15);
          point(diceXLocation + 35, diceYLocation + 15);
          point(diceXLocation + 15, diceYLocation + 35);
          point(diceXLocation + 35, diceYLocation + 35);
          point(diceXLocation + 25, diceYLocation + 25);
          break;
        case 6:
          point(diceXLocation + 15, diceYLocation + 15);
          point(diceXLocation + 35, diceYLocation + 15);
          point(diceXLocation + 25, diceYLocation + 15);
          point(diceXLocation + 15, diceYLocation + 35);
          point(diceXLocation + 35, diceYLocation + 35);
          point(diceXLocation + 25, diceYLocation + 35);
          break;
      }
    }
  }
  print("Finished rolling all dices");
}

function rollDice() {
  diceNumber = int(random(1, 7));
}
/*
function keyPressed() {
  if (key == 'r' || key == 'R') {

    for (var diceXLocation = 0; diceXLocation < width; diceXLocation =
      diceXLocation + diceSize) {
      for (var diceYLocation = 0; diceYLocation < height; diceYLocation =
        diceYLocation + diceSize) {
        for (var y = 0; y < 10; y = y + 0.5) {
          rect(diceXLocation + 100 * cos(y), diceYLocation + 100 * sin(y),
            diceSize, diceSize, 12);
        }
      }
    }
  }
}
*/
function keyPressed() {
  if (key == 'r' || key == 'R') {
    for (var y = 0; y < 600; y = y + 0.1) {
      background(100);
      ellipse(300, 300, y, y);
    }
  }
}
