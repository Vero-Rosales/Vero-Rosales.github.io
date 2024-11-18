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
  noCursor(); // Ocultar el cursor por defecto
}

function draw() {
  background(155, 0, 255);

  // Dibujar nubes y manejar su interacción
  for (let cloud of clouds) {
    drawCloud(cloud.x, cloud.y, cloud.size);

    // Movimiento automático de las nubes
    cloud.x += cloud.speed;

    // Reiniciar nubes que salen del lienzo
    if (cloud.x > width) {
      cloud.x = -cloud.size;
      cloud.y = random(height);
    }

    // Interacción con el ratón: Aumentar tamaño si el ratón está cerca
    let distance = dist(mouseX, mouseY, cloud.x, cloud.y);
    if (distance < cloud.size) {
      cloud.size += 2; // Aumentar tamaño
    } else if (cloud.size > 80) {
      cloud.size -= 0.5; // Reducir tamaño gradualmente
    }
  }

  // Dibujar el "pájaro" en la posición del ratón
  drawBird(mouseX, mouseY);
}

function drawCloud(x, y, size) {
  fill(173, 216, 230);
  noStroke();
  ellipse(x, y, size, size * 0.6);
  ellipse(x + size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
  ellipse(x - size * 0.5, y + size * 0.2, size * 0.8, size * 0.5);
}

function drawBird(x, y) {
  fill(0); // Color negro para el pájaro
  noStroke();

  // Cuerpo del pájaro
  ellipse(x, y, 20, 10); // Cuerpo ovalado

  // Ala del pájaro
  triangle(x - 5, y, x - 15, y - 10, x - 15, y + 10);

  // Pico del pájaro
  fill(255, 204, 0); // Amarillo para el pico
  triangle(x + 10, y, x + 15, y - 2, x + 15, y + 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
