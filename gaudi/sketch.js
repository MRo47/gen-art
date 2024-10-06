let wave_img;
let mosiac_img;
let single_wave_img;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  background(255);

  seed = int(random(0, 1000000000))
  randomSeed(seed)
  console.log("seed: ",seed);

  let mosiac_radius = min(width, height) / 200;
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

  draw_gaudi(colors, seperator_color, seed, true);
  
  single_wave_img = get();
  
  background(255);

  draw_gaudi(colors, seperator_color, seed);

  let wave_img_no_border = get();

  wave_img = get();

  draw_mosaic(mosiac_radius, wave_img_no_border, mosiac_background_color);

  mosiac_img = get();

  noLoop();
}

function save_images() {
  let img_prefix;
  if (seed === undefined) {
    now = new Date();
    img_prefix = now.getTime();
  } else {
    img_prefix = seed;
  }
  wave_img.save(img_prefix + "_wave.png");
  mosiac_img.save(img_prefix + "_mosaic.png");
  single_wave_img.save(img_prefix + "_single_wave.png");
}

function mousePressed() {
  if(mouseX < width/3 && mouseY < height/3) {
    save_images();
  }
}

// Set the fill color to a random grayscale value.
function touchEnded() {
  touch = touches.pop()
  if(touch.x < width/3 && touch.y < height/3) {
    save_images();
  }
}

function draw_border(border_width, color) {
  noFill();
  strokeWeight(border_width * 2);
  stroke(color);
  rect(0, 0, width, height);
  noStroke();
}

function draw_gaudi(colors, seperator_color, seed, single_curve=false) {
  let x_div = width / 80;
  let y_div = height / 20;
  
  randomSeed(seed)
  for (y = -1; y < height / y_div + 1; y++) {
    x_offset = random(-x_div, x_div);
    phi = random(0, y_div * 5);
    color = random(colors);
    y_offset = y + random(0.1, 0.7);
    phi_offset = phi + random(0, y_div / 2);

    if(single_curve) {
      draw_single_curve(y, y_div, x_offset, phi, color, seperator_color);
    } else {
      fill(seperator_color);
      draw_curve(y * y_div, x_offset, phi, seperator_color);
      fill(color);
      draw_curve(y_offset * y_div, x_offset, phi_offset, color);
    }

  }
}

function draw_curve(y, x_offset, phi, col) {
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

function draw_single_curve(y, y_div, x_offset, phi, color, seperator_color) {
  if (y === Math.floor(height / 2 / y_div)) {
    fill(seperator_color);
    draw_curve(y * y_div, x_offset, phi, seperator_color);
    fill(color);
    draw_curve(y_offset * y_div, x_offset, phi_offset, 0);
  }
  if (y === Math.floor(height / 2 / y_div) + 1) {
    fill(seperator_color);
    // noFill();
    draw_curve(y * y_div, x_offset, phi, 0);
  }
}