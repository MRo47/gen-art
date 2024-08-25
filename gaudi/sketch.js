function setup() {
  createCanvas(1200,920)
  strokeWeight(3)

  let colors = ["#011627", "#2ec4b6", "#e71d36", "#ff9f1c"]
  // let colors = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"]
  // let colors = ["#d00000", "#ffba08", "#3f88c5", "#032b43", "#136f63"]
  // let colors = ["#55dde0", "#33658a", "#2f4858", "#f6ae2d", "#f26419"]
  // let colors = ["#0466c8", "#0353a4", "#023e7d", "#002855", "#001845", "#001233", "#33415c", "#5c677d", "#7d8597", "#979dac"]
  // let colors = ["#00abf5", "#38027c", "#00469e", "#84d600", "#006132", "#00946a", "#00be55", "#49c800", "#ffc300", "#0078d5", "#ff7100", "#fc0000"]

  let y_div = 60;

  // let bg2_color = "#ffffe9"
  // let bg2_color = "#e9ffec"
  let bg2_color = "#ffffff";
  // let bg2_color = random(colors)

  for(y=-1; y<(width/y_div)+1; y++)
  {
    x_offset = random(-15, 15)
    phi = getRandomFloat(0, y_div*5)
    col = random(colors)
    fill(bg2_color)
    drawCurve(y * y_div, x_offset, phi, bg2_color)
    fill(col)
    drawCurve((y+0.4+getRandomFloat(-0.3, 0.3))*y_div, x_offset, phi+getRandomFloat(0,0.5*y_div), col)
  }
  
  // let bg_color = "#fff5df"
  // let bg_color = "ffffff"
  // let bg_color = "#ddefff"
  // let bg_color = "#ffffff"
  let bg_color = 30
  draw_mosaic(2.5, get(), bg_color)

  draw_border(10, 0)

  noLoop();
}

function draw_border(border_width, color) {
  noFill()
  strokeWeight(border_width*2)
  stroke(color)
  rect(0, 0, width, height)
  noStroke()
}

function drawCurve(y, x_offset, phi, col)
{
  beginShape()
  stroke(col)
  margin = 30
  wavelength = 0.8*PI / 180
  
  vertex(-margin, height*1.05)

  for (x = -margin; x < width + margin; x += 1) {
    curveVertex(x + x_offset, y + 20 * cos((x + phi) * wavelength))
  }

  vertex(width+margin, height*1.05)

  endShape(CLOSE)
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min
}

