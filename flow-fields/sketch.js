
var num = 2000;
var noiseScale = 800;
var noiseStrength = 2;
var particles = [num];
var x_scale = 1.5;
var speed = 2; // random(0.5, 2);
var started = false;
var sound;

function preload() {
  sound = loadSound('assets/ambient-wave-48-tribute-17243-pixabay.mp3')
}

function setup() {
  frameRate(30);
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    var loc = createVector(random(width * x_scale), random(height), 2);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    particles[i] = new Particle(loc, dir, speed);
  }
  background(0);
  fill(255);
  circle(width / 2, height / 2, min(width, height) / 3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  if (started) {
    fill(0, 10);
    noStroke();
    rect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].run();
    }
  }
}

function mousePressed() {
  if (!started) {
    userStartAudio();
    sound.loop();
    fullscreen(true)
    started = true;
  }
  else {
    sound.pause();
    fullscreen(false);
    saveDrawing();
    started = false;
  }
}

function saveDrawing() {
  save(createNameTimestamp("mro47_flow-fields"));
}

function createNameTimestamp(name) {
  const timestamp = Date.now();
  return `${name}_${timestamp}`;
}