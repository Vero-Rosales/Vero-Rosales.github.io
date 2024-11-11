function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");
}

function draw() {
  background(155, 0, 255);
}
let clouds = [];

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");

  for (let i = 0; i < 10; i++) {
    clouds.push({
      x: random(width),
      y: random(height),
      size: random(80, 150),
      speed: random(0.5, 2),
    });
  }
}

function draw() {
  background(155, 0, 255);

  for (let cloud of clouds) {
    drawCloud(cloud.x, cloud.y, cloud.size);
    cloud.x += cloud.speed;

    if (cloud.x > width) {
      cloud.x = -cloud.size;
      cloud.y = random(height);
    }
  }
}

function drawCloud(x, y, size) {
  fill(173, 216, 230);
  noStroke();
  ellipse(x, y, size, size * 0.6);
  ellipse(x + size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
  ellipse(x - size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
