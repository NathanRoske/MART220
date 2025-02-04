var w = 50;
var a = 50;
var s = 50;
var d = 50;

var plate1EllipseX1 = 300;
var plate1EllipseY1 = 600;
var plate1EllipseX2 = 450;
var plate1EllipseY2 = 200;

var plateShadowEllipseX1 = 300;
var plateShadowEllipseY1 = 590;
var plateShadowEllipseX2 = 400;
var plateShadowEllipseY2 = 150;

var plate2EllipseX1 = 300;
var plate2EllipseY1 = 590;
var plate2EllipseX2 = 350;
var plate2EllipseY2 = 150;

var boneEllipseX1 = 350;
var boneEllipseY1 = 590;
var boneEllipseX2 = 50;
var boneEllipseY2 = 25;

var steakPart1EllipseX1 = 300;
var steakPart1EllipseY1 = 600;
var steakPart1EllipseX2 = 300;
var steakPart1EllipseY2 = 100;

var steakPart2CircleX1 = 350;
var steakPart2CircleY1 = 580;
var steakPart2Radius = 125;

var steakPart3EllipseX1 = 400;
var steakPart3EllipseY1 = 590;
var steakPart3Radius = 95;
 
var steakPart4EllipseX1 = 290;
var steakPart4EllipseY1 = 590;
var steakPart4EllipseX2 = 300;
var steakPart4EllipseY2 = 100;

var tableX = 1;
var tableY = 5;


var TableXSpeed;
var TableYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(600,700)
    TableXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    TableYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
}

function draw()
{
    background(50,100,200);
    
    fill(30,50,75)
    table();
    TableXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    TableYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);

    tableX -= TableXSpeed;
    tableY -= TableYSpeed;

    if(tableX > width)
    {
        tableX = 0
    }
    if(tableX < 0)
    {
        tableX = width;
    }
    if(tableY < height)
    {
        tableY = 0;
    }
    if(tableY < 0)
    {
        tableY = height;
    }

    fill(255,255,255)
    platePart1();

    fill(50,50,50)
    plateShadow();

    fill(255,255,255)
    platePart2();
    
    DrawSteak();

    fill(50)
    line(mouseShapeX,mouseShapeY,250,450);

    fill(250)
    textSize(20)
    text('Sliding Table Makes the Cut', 300, 20);
    text('Nate Roske', 490, 690);
}


function DrawSteak(){        
        fill(139,0,0)
        steakPart1()
        steakPart2()
        steakPart3()
        fill(100,0,0)
        steakPart4()
        fill(255,255,255)
        bone();
} 
function table(){
   
    square(tableX, tableY, 450);
}

function platePart1(){
    ellipse(plate1EllipseX1, plate1EllipseY1, plate1EllipseX2, plate1EllipseY2);
}

function plateShadow(){
    ellipse(plateShadowEllipseX1, plateShadowEllipseY1, plate2EllipseX2, plate2EllipseY2);
}

function platePart2(){
    ellipse(plate2EllipseX1, plate2EllipseY1, plate2EllipseX2, plate2EllipseY2);
}

function bone(){
    ellipse(boneEllipseX1, boneEllipseY1, boneEllipseX2, boneEllipseY2);
}

function steakPart1(){
    ellipse(steakPart1EllipseX1, steakPart1EllipseY1, steakPart1EllipseX2, steakPart1EllipseY2);
}

function steakPart2(){    
    circle(steakPart2CircleX1, steakPart2CircleY1, steakPart2Radius);
}

function steakPart3(){
    circle(steakPart3EllipseX1, steakPart3EllipseY1, steakPart3Radius);
}

function steakPart4(){
    ellipse(steakPart4EllipseX1, steakPart4EllipseY1, steakPart4EllipseX2,steakPart4EllipseY2);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

