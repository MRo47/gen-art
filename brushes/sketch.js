function setup() {
  createCanvas(800, 600);
  background(200);
}

function drawPolygon(x, y, sides, size, col) {
  fill(col);
  noStroke();
  beginShape();
  for (let i = 0; i < sides; i++) {
    let angle = TWO_PI / sides * i;
    let px = x + cos(angle) * size;
    let py = y + sin(angle) * size;
    vertex(px, py);
  }
  endShape(CLOSE);
}

function draw() {
  if (mouseIsPressed) {
    let brushSize = random(10, 15);
    let brushColor = color(0);

    fill(brushColor);
    noStroke();

    drawPolygon(mouseX, mouseY, 8, brushSize, brushColor);
  }
}
