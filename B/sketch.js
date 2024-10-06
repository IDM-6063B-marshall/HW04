function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  strokeWeight(1);
  for (let y = -10; y < windowHeight + 100; y += 40) {
    for (let x = 0; x < windowWidth + 100; x += 40) {
      // line length
      let ll = random(20, 30);
      //randomize X
      let rx = random(5, 15);
      //randomize Y
      let ry = random(5, 15);
      push();
      translate(x, y);
      //angleMode(DEGREES)
      //rotate(45)
      rect(rx, ry, 1, ll);
      pop();
    }
  }
}
