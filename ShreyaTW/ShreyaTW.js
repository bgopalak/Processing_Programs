//Project by Shreya Balaji

//Declaring the Arrays and setting everything up (for loop)
var c = [];
class Tumbleweed {
  constructor(x, y, s) {
    this.xpos = x;
    this.ypos = y;
    this.speed = s;
    //Make the color random
    this.clr = color(random(0, 255), random(0, 255), (random(0, 255)));
    //Number of rings
    this.rings = random(5, 10);
  }

  show() {

  }
}

function setup() {
  createCanvas(800, 800);
  background(100);

}

function draw() {
  for (var j = 1; j < c.length; j++) {
    c[j].show();
  }
}

function mouseClicked() {
  c.push(new Tumbleweed(mouseX, mouseY, random(1, 5)));
}

//Declaring all of the variables
