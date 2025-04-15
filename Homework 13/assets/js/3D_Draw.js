let img;
let img2;
let img3;

let clayface;

let pg;

var cubeX = -250;
var cubeY = -250;

var ellipsoidX = -250;
var ellipsoidY = 150;

function preload()
{
    clayface = loadModel("images/Clayface.obj", true);
    img = loadImage("images/png/Blood Lake.png");
    img2 = loadImage("images/png/Quelna(1).png");
    img3 = loadImage("images/png/XenomorphArt.png");
}

function setup()
{
    createCanvas(800,800, WEBGL);
    pg = createGraphics(256,156);
    
}
function draw()
{
    background(55, 60, 71);

    drawCube();
    drawCylinder();
    drawTorus();
    drawEllipsoid();
    drawCone();
    drawClayface();

    drawTitleAndName();
    
}

function drawCube()
{
    push();
    texture(img3);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    translate(cubeX,cubeY);
    box(150, 150, 150);
    pop();
}

function drawCylinder()
{
    push()
    texture(img);
    rotateX(frameCount * 0.1);
    rotateZ(frameCount * 0.01);
    translate(250, 250);
    cylinder(100, 250);
    pop();
}

function drawEllipsoid()
{
    push();
    texture(img2);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.025);
    translate(ellipsoidX, ellipsoidY);
    ellipsoid(60, 80, 80);
    pop();
}

function drawTorus()
{
    push();
    pointLight(255, 255, 255, mouseX, mouseY, 0);
    specularMaterial(250,0,0);
    rotateX(frameCount * 0);
    rotateY(frameCount * 0.15);
    translate(0,-200);
    torus(30, 15);
    pop();
}

function drawCone()
{
    push();
    normalMaterial();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    translate(250,-250);
    cone(30, 40);
    pop();
}

function drawClayface()
{
    push();
    scale(0.5);
    translate(0, -50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial();
    model(clayface);
    pop();
}

function drawTitleAndName()
{
    push();
    pg.background(255);
    pg.text("More 3D Stuff, by Nate Roske", 0, 140);
    texture(pg);
    plane(400,100);
    pop();
}

function mouseClicked(){
    cubeX = cubeX - (random(-300,300));
    cubeY = cubeY - (random(-300,300));
    ellipsoidX = ellipsoidX - (random(-300,300));
    ellipsoidY = ellipsoidY - (random(-300,300));
}
