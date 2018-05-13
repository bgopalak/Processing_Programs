  var c = [];

  function setup() {
    createCanvas(800, 800);
    background(103);
    for (var i = 0; i < 150; i++) {
      c[i] = new Car(random(25, 700), random(15, 800), random(0.2, 2));
    }
  }

  function draw() {
    background(103);
    for (var i = 0; i < 150; i++) {
      c[i].Display();
      c[i].Move();
    }

  }

  class Car {
    constructor(x, y, s) {
      this.xpos = x;
      this.ypos = y;
      this.speed = s;
      this.clr = color(random(0, 255), random(0, 255), (random(0, 255)));
      this.light = random(0, 2);
    }

    Display() {
      fill(this.clr);
      noStroke();
      rect(this.xpos, this.ypos, 25, 15);
      rect(this.xpos + 25, this.ypos + 5, 10, 10);
      rect(this.xpos - 10, this.ypos + 5, 10, 10);
      stroke(2);
      fill("black");
      ellipse(this.xpos + 5, this.ypos + 20, 5, 5);
      ellipse(this.xpos + 25, this.ypos + 20, 5, 5);

      if (this.light >= 1) {
        fill("white");
        noStroke();
        ellipse(this.xpos + 35, this.ypos + 10, 2, 2);
      }
    }

    Move() {
      this.xpos = this.xpos + this.speed;

      if (this.xpos > 805) {
        this.xpos = -15;
      }
    }
  }
