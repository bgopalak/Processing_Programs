var c = [];

function setup() {
  background(170);
  createCanvas(800, 800);
}

function draw() {
  background(170);
  for (var j = 0; j < c.length; j++) {
    c[j].Display();
    c[j].Move();
  }
}

function mouseClicked() {
  c.push(new Bundle(mouseX, mouseY, random(0.1, 0.5)));
}

class Bundle {
  constructor(x, y, s) {
    this.xpos = x;
    this.ypos = y;
    this.speed = s;
    this.clr = color(random(0, 255), random(0, 255), (random(0, 255)));
    this.rings = random(6, 12);
  }

  Display() {
    noFill();
    stroke(this.clr);
    for (var i = 1; i <= this.rings; i++) {
      stroke(this.clr);
      strokeWeight(1);
      ellipse(this.xpos + random(-4, 4), this.ypos + random(-4, 4), i *
        10);
    }
  }

  Move() {
    this.xpos = this.xpos + this.speed;
    if (this.xpos > 800) {
      explodeStars(this.xpos, this.ypos);
      this.xpos = 0;
    }
  }
}

function explodeStars(x, y) {
  print("Explode Stars");
  var s = [];
  for (var i = 0; i <= 100; i++) {
    s[i] = new ExStars(x, y, 2);
  }
  for (var i = 0; i <= 100; i++) {
    s[i].Display();
  }

}

class ExStars {
  constructor(x, y, s) {
    this.xpos = x;
    this.ypos = y;
    this.speed = s;
  }
  Display() {
    //noFill();
    fill("blue");
    strokeWeight(5);
    ellipse(790, this.ypos - 100, 20, 20);
    ellipse(790, this.ypos - 80, 15, 15);
    ellipse(790, this.ypos - 60, 10, 10);
    ellipse(790, this.ypos - 40, 5, 5);
    ellipse(790, this.ypos + 100, 20, 20);
    ellipse(790, this.ypos + 80, 15, 15);
    ellipse(790, this.ypos + 60, 10, 10);
    ellipse(790, this.ypos + 40, 5, 5);
    ellipse(780, this.ypos, 20, 20);
    ellipse(760, this.ypos, 15, 15);
    ellipse(740, this.ypos, 10, 10);
    ellipse(720, this.ypos, 5, 5);

  }

}
