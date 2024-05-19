class Particle {
  constructor(_loc, _dir, _speed) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.color = color(random(0, 200), random(0, 200), 255);
    this.col_switch = false;
    this.loc.z = random(1, 8);

  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move() {
    let angle = noise(this.loc.x / noiseScale, this.loc.y / noiseScale, frameCount / noiseScale) * TWO_PI * noiseStrength; //0-2PI
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d = 1;  //direction change 
    vel.mult(this.speed * d); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
  }
  color_gen() {
    if (this.col_switch) {
      this.col_switch = !this.col_switch;
      return color(random(0, 200), random(0, 200), 255);
    } else {
      this.col_switch = !this.col_switch;
      return color(255, random(0, 200), random(0, 200));
    }
  }
  checkEdges() {
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if (this.loc.x < 0 || this.loc.x > width || this.loc.y < 0 || this.loc.y > height) {
      this.loc.x = random(width * x_scale);
      this.loc.y = random(height);
      this.color = this.color_gen();
    }
  }
  update() {
    fill(this.color);
    ellipse(this.loc.x, this.loc.y, this.loc.z);
  }
}