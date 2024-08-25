function setup() {
  createCanvas(1920, 1080);
  strokeWeight(3);

  let mosiac_radius = 5;
  let mosiac_background_color = 20;

  let palletes = [
    ["#011627", "#2ec4b6", "#e71d36", "#ff9f1c"],
    ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"],
    ["#d00000", "#ffba08", "#3f88c5", "#032b43", "#136f63"],
    ["#55dde0", "#33658a", "#2f4858", "#f6ae2d", "#f26419"],
    [
      "#0466c8",
      "#0353a4",
      "#023e7d",
      "#002855",
      "#001845",
      "#001233",
      "#33415c",
      "#5c677d",
      "#7d8597",
      "#979dac",
    ],
  ];

  let colors = random(palletes);

  let seperator_color = "#ffffff";

  drawGaudi(colors, seperator_color);

  draw_mosaic(mosiac_radius, get(), mosiac_background_color);

  draw_border(10, 0);

  noLoop();
}

function draw_border(border_width, color) {
  noFill();
  strokeWeight(border_width * 2);
  stroke(color);
  rect(0, 0, width, height);
  noStroke();
}

function drawGaudi(colors, seperator_color) {
  let x_div = width / 20;

  for (y = -1; y < width / x_div + 1; y++) {
    x_offset = random(-x_div / 4, x_div / 4);
    phi = random(0, x_div * 5);
    col = random(colors);
    fill(seperator_color);
    drawCurve(y * x_div, x_offset, phi, seperator_color);
    fill(col);
    drawCurve(
      (y + random(0.1, 0.7)) * x_div,
      x_offset,
      phi + random(0, x_div / 2),
      col
    );
  }
}

function drawCurve(y, x_offset, phi, col) {
  beginShape();
  stroke(col);
  margin = 30;
  wavelength = (0.8 * PI) / 180;

  vertex(-margin, height * 1.05);

  for (x = -margin; x < width + margin; x += 1) {
    curveVertex(x + x_offset, y + (height / 40) * cos((x + phi) * wavelength));
  }

  vertex(width + margin, height * 1.05);

  endShape(CLOSE);
}

