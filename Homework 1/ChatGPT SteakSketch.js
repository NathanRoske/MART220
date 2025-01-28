function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(220);
  
    // Steak base
    fill(165, 42, 42); // Brownish-red for the steak
    stroke(100, 30, 30); // Darker brown for the outline
    strokeWeight(2);
    beginShape();
    vertex(150, 200);
    bezierVertex(120, 150, 200, 100, 250, 150);
    bezierVertex(320, 200, 280, 300, 150, 270);
    bezierVertex(100, 250, 120, 220, 150, 200);
    endShape(CLOSE);
  
    // Fat line
    fill(255, 245, 230); // Cream color for fat
    noStroke();
    beginShape();
    vertex(170, 210);
    bezierVertex(190, 180, 240, 180, 260, 200);
    bezierVertex(270, 220, 230, 250, 200, 240);
    bezierVertex(180, 230, 170, 220, 170, 210);
    endShape(CLOSE);
  
    // Steak details
    stroke(100, 30, 30);
    strokeWeight(1.5);
    line(180, 220, 200, 210);
    line(200, 230, 220, 220);
    line(220, 240, 240, 230);
  }
  