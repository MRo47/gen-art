function setup() {
  createCanvas(800,800)
  // noStroke()
  strokeWeight(3)
  // noFill()

  var colors = ["#0466c8", "#0353a4", "#023e7d", "#002855", "#001845", "#001233", "#33415c", "#5c677d", "#7d8597", "#979dac"]

  y_div = 60

  for(y=-1; y<(width/y_div)+1; y++)
  {
    x_offset = 0 //random(-15, 15)
    phi = getRandomFloat(0, y_div*3)
    col = random(colors)
    // col = colors[y%colors.length]
    // col = "#002855"
    fill(col)
    draw_curve(y * y_div, x_offset, phi, "#ffffff")
    fill("#ffffff")
    draw_curve((y+0.5+getRandomFloat(-0.3, 0.3))*y_div, x_offset, phi, col)
  }
}

function draw_curve(y, x_offset, phi, col)
{
  beginShape()
  // stroke(col)
  
  vertex(0, height+10)

  for (x = -15; x < width + 15; x += 1) {
    curveVertex(x + x_offset, y + 30 * cos((x + phi) * PI / 180))
  }

  vertex(width, height+10)

  endShape(CLOSE)
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min
}


function draw() {

}