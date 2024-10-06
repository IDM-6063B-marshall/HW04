function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  background(255, 255, 255);
  stroke(255, 255, 255);

  let rg = random(256);
  let rr = random(256);
  let rb = random(256);

  fill(rr, rg, rb);

  let ry = random(-100, 100);
  let rx = random(-100, 100);

  //Drawing random ellipses
  for (let y = random(5); y < height + 100; y += ry) {
    for (let x = random(5); x < width + 100; x += rx) {
      ellipse(x, y, random(150));
    }
  }
}
