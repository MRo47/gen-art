function setup() {
  createCanvas(900,900)
  // noStroke()
  strokeWeight(3)
  // noFill()

  var colors = ["#0466c8", "#0353a4", "#023e7d", "#002855", "#001845", "#001233", "#33415c", "#5c677d", "#7d8597", "#979dac"]
  // var colors = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"]

  y_div = 60

  for(y=-1; y<(width/y_div)+1; y++)
  {
    x_offset = random(-15, 15)
    phi = getRandomFloat(0, y_div*5)
    col = random(colors)
    // col = colors[y%colors.length]
    // col = "#002855"
    fill("#ffffff")
    draw_curve(y * y_div, x_offset, phi, "#ffffff")
    fill(col)
    draw_curve((y+0.4+getRandomFloat(-0.3, 0.3))*y_div, x_offset, phi+getRandomFloat(0,0.5*y_div), col)
  }
}

function draw_curve(y, x_offset, phi, col)
{
  beginShape()
  stroke(col)
  
  vertex(0, height+10)

  margin = 30
  wavelength = 0.8*PI / 180

  for (x = -margin; x < width + margin; x += 1) {
    curveVertex(x + x_offset, y + 20 * cos((x + phi) * wavelength))
  }

  vertex(width, height+10)

  endShape(CLOSE)
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min
}

