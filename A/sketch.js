function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  background(255, 255, 255);
  stroke(255, 255, 255);

  let rg = random(256);
  let rr = random(256);
  let rb = random(256);

  fill(rr, rg, rb);

  //Drawing random bubbles
  for (let y = 0; y < height; y += random(-10, 100)) {
    for (let x = 0; x < width; x += random(-10, 100)) {
      let ry = random(0, height);
      let rx = random(0, width);
      let rn = random(1, 55);
      ellipse(rx, ry, rn);
    }
  }
}
