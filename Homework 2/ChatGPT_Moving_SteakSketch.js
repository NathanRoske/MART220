let steakX, steakY;
let fatX, fatY;
let moveAmount = 2;
let title = "Juicy Steak";
let name = "Your Name";

function setup() {
  createCanvas(400, 400);
  steakX = width / 4;
  steakY = height / 3;
  fatX = steakX + 20;
  fatY = steakY + 10;
}

function draw() {
  background(220);

  // Title in upper-left
  fill(0);
  textSize(16);
  text(title, 10, 20);

  // Random movement for steak and fat
  steakX += random(-moveAmount, moveAmount);
  steakY += random(-moveAmount, moveAmount);
  fatX += random(-moveAmount, moveAmount);
  fatY += random(-moveAmount, moveAmount);

  drawSteak(steakX, steakY);
  drawFat(fatX, fatY);

  // Name in lower-right
  textSize(14);
  text(name, width - textWidth(name) - 10, height - 10);
}

function drawSteak(x, y) {
  fill(165, 42, 42); // Steak color
  stroke(100, 30, 30);
  strokeWeight(2);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 30, y - 50, x + 50, y - 100, x + 100, y - 50);
  bezierVertex(x + 170, y, x + 130, y + 100, x, y + 70);
  bezierVertex(x - 50, y + 50, x - 30, y + 20, x, y);
  endShape(CLOSE);
}

function drawFat(x, y) {
  fill(255, 245, 230);
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x + 20, y - 30, x + 70, y - 30, x + 90, y);
  bezierVertex(x + 100, y + 20, x + 60, y + 50, x + 30, y + 40);
  bezierVertex(x + 10, y + 30, x, y + 20, x, y);
  endShape(CLOSE);
}

// Mouse interaction: Changes steak position
function mousePressed() {
  steakX = mouseX;
  steakY = mouseY;
}

// Keyboard event: Stops movement when "s" is pressed
function keyPressed() {
  if (key === 's' || key === 'S') {
    moveAmount = 0;
  }
  if (key === 'r' || key === 'R') {
    moveAmount = 2;
  }
}
  