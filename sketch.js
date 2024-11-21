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
  // Dibujar cuerpo del pájaro
  fill(0); // Color negro para el cuerpo
  noStroke();
  ellipse(x, y, 25, 15); // Cuerpo ovalado
  
  // Dibujar ala
  fill(60); // Gris oscuro para el ala
  triangle(x - 5, y, x - 20, y - 10, x - 20, y + 10); // Ala en forma de triángulo
  
  // Dibujar cola
  fill(60); // Gris oscuro para la cola
  triangle(x - 12, y + 5, x - 20, y + 2, x - 20, y + 8); // Cola puntiaguda
  
  // Dibujar pico
  fill(255, 204, 0); // Amarillo para el pico
  triangle(x + 12, y, x + 18, y - 3, x + 18, y + 3); // Pico más definido
  
  // Dibujar ojo
  fill(255); // Blanco para el ojo
  ellipse(x + 5, y - 3, 4, 4); // Fondo del ojo
  fill(0); // Pupila
  ellipse(x + 5, y - 3, 2, 2); // Pupila
  
  // Dibujar patas (opcional, solo si queremos un pájaro más completo)
  stroke(0); // Negro para las patas
  strokeWeight(1.5);
  line(x - 5, y + 8, x - 5, y + 12); // Pata izquierda
  line(x - 3, y + 8, x - 3, y + 12); // Pata derecha
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
