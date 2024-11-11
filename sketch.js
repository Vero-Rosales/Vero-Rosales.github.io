function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");
}

function draw() {
  background(155, 0, 255);
}
let clouds = []; // Array para almacenar las nubes

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("#my-p5-sketch");

  // Crear varias nubes con posiciones y tamaños aleatorios
  for (let i = 0; i < 10; i++) {
    clouds.push({
      x: random(width),
      y: random(height), // Posición en toda la altura de la pantalla
      size: random(80, 150),
      speed: random(0.5, 2),
    });
  }
}

function draw() {
  background(155, 0, 255);

  // Dibujar y mover cada nube
  for (let cloud of clouds) {
    drawCloud(cloud.x, cloud.y, cloud.size);
    cloud.x += cloud.speed;

    // Reposicionar la nube si se sale de la pantalla
    if (cloud.x > width) {
      cloud.x = -cloud.size;
      cloud.y = random(height); // Posición en toda la altura de la pantalla
    }
  }
}

// Función para dibujar una nube
function drawCloud(x, y, size) {
  fill(173, 216, 230); // Color celeste claro
  noStroke();
  ellipse(x, y, size, size * 0.6);
  ellipse(x + size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
  ellipse(x - size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
}

// Ajustar el tamaño del canvas si la ventana cambia de tamaño
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
