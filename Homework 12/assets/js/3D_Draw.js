let img;
let img2;
let img3;

let pg;

function setup()
{
    createCanvas(800,800, WEBGL);
    pg = createGraphics(256,156);
    img = loadImage("images/png/Blood Lake.png")
    img2 = loadImage("images/png/Quelna(1).png")
    img3 = loadImage("images/png/XenomorphArt.png")
}
function draw()
{
    background(55, 60, 71);

    drawCube();
    drawCylinder();
    drawTorus();
    drawEllipsoid();
    drawCone();

    drawTitleAndName();
}

function drawCube()
{
    push();
    texture(img3);
    translate(-250,-250);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(150, 150, 150);
    pop();
}

function drawCylinder()
{
    push()
    texture(img);
    translate(250, 250);
    rotateX(frameCount * 0.1);
    rotateZ(frameCount * 0.01);
    cylinder(100, 250);
    pop();
}

function drawEllipsoid()
{
    push();
    texture(img2);
    translate(-250, 150);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.025);
    ellipsoid(60, 80, 80);
    pop();
}

function drawTorus()
{
    push();
    pointLight(255, 255, 255, mouseX, mouseY, 0);
    specularMaterial(250,0,0);
    translate(0,-200);
    rotateX(frameCount * 0);
    rotateY(frameCount * 0.15);
    torus(30, 15);
    pop();
}

function drawCone()
{
    push();
    normalMaterial();
    translate(250,-250);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(30, 40);
    pop();
}

function drawTitleAndName()
{
    push();
    pg.background(255);
    pg.text("Drawings Plastered on Shapes, by Nate Roske", 0, 140);
    texture(pg);
    plane(400,100);
    pop();
}