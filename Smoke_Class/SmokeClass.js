  var c = [];

  function setup() {
    createCanvas(800, 800);
    background(103);
    for (var i = 0; i < 10; i++) {
      c[i] = new Smoke(0, 400, random(0.01, 0.1));
    }
  }

  function draw() {
    //background(103);
    fill(103, 10);
    rect(0, 0, 800, 800);
    for (var i = 0; i < 10; i++) {
      c[i].Display();
      c[i].Move();
    }

  }

  class Smoke {
    constructor(x, y, s) {
      this.xpos = x;
      this.ypos = y + random(-4, 4);
      this.speed = s;
      this.clr = color(random(0, 255), random(0, 255), (random(0, 255)));
    }

    Display() {
      fill(this.clr);
      noStroke();
      //fill("white");
      this.ypos = this.ypos + random(-0.05, 0.05);
      ellipse(this.xpos, this.ypos, 3, 3);
    }

    Move() {
      this.xpos = this.xpos + this.speed;

      if (this.xpos > 805) {
        this.xpos = -15;
      }
    }
  }
