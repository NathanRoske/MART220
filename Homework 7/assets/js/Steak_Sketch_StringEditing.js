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

var steak_1;
var steak_2;
var ChatGPT_steak;

var steak_1X = 200;
var steak_1Y = 100;
var steak_1Speed = 2;

var steak_2X = 0;
var steak_2Y = 0;
var steak_2Speed = 5;

var newFont;
var timerValue = 30;

var MyAnimation;
var animations = [];
var i = 0;
var j = 0;

var SteakbiteArray = [];
var SteakbitesFound = false;
var burntSteakbiteArray = [];
var burntSteakbitesFound = false;

var score = 0;


var x = 150;
var y = 150;
var w = 150;
var h = 150;
var idlePaths = [];
var walkPaths = [];
var walkAnimation = [];


function preload() {
    
    idlePaths = loadStrings("images/png/idle.txt");
    walkPaths = loadStrings("images/png/walk.txt");
    
}

function setup()
{
    steak_1 = loadImage('images/Steak-Transparent-Free-PNG.png');
    steak_2 = loadImage('images/OIP.jpg');
    ChatGPT_steak = loadImage('images/Chat GPT Steak.png');
    newFont = loadFont('fonts/ShadowsIntoLight-Regular.ttf');
    createCanvas(600,700)
    TableXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    TableYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);

    

    MyAnimation = new animationImages(idlePaths, 150, 150, 150, 150);
    animations[i] = MyAnimation;
    MywalkAnimation = new animationImages(walkPaths, 150, 150, 150, 150);
    
    setInterval (timer, 1000)

    for (let i = 0; i < 20; i++){
        mySteakbites = new Steakbites(random(100, 500), random(100,500), 25);
        SteakbiteArray.push(mySteakbites); 
    }

    for (let i = 0; i < 20; i++){
        myburntSteakbites = new burntSteakbites(random(100, 500), random(100,500), 25);
        burntSteakbiteArray.push(myburntSteakbites); 
    }

    setInterval (moveSteakbites, 5000)
    for (let i = 0; i < 20; i++){
        mySteakbites = new Steakbites(random(100, 600), 25)
        SteakbiteArray.push(mySteakbites);
    }
    setInterval (moveburntSteakbites, 5000)
    for (let i = 0; i < 20; i++){
        myburntSteakbites = new burntSteakbites(random(100, 600), 25);
        burntSteakbiteArray.push(myburntSteakbites);
    }
}

function draw()
{
    background(50,100,200);
    
    fill(200)
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

    /*fill(50)
    line(mouseShapeX,mouseShapeY,250,450);
*/
    image(steak_1, steak_1X, steak_1Y);
    steak_1Y += steak_1Speed;
    if(steak_1Y >= width - steak_1.width || steak_1Y <= steak_1.width/2)
    {
        steak_1Speed *= -steak_1;
    }

    image(steak_2,steak_2X,steak_2Y);
    if (timerValue >= 30) {
        text("0:" + timerValue, width / 2, height / 2);
    }
    if (timerValue < 30) {
        text('0:' + timerValue, width / 2, height / 2);
    }
    if(timerValue == 0) {
        steak_2X += steak_2Speed;
        textFont(newFont)
        text("Time's up!!!", 250, 250);
    }

    image(ChatGPT_steak, 400, 150)

    fill(250)
    textFont(newFont);
    textSize(20)
    text('Sliding Table Makes the Cut', 300, 20);
    text('Nate Roske', 490, 690);

    drawSteakbites();

    drawburntSteakbites();
    
    displayScore();

    characterMovment();
    
    
}
    

    

function characterMovment(){
    if (keyIsPressed) {
        if (key == "a") {
            MywalkAnimation.setCurrentFrameCount(frameCount);
            MywalkAnimation.drawAnimations();
            MywalkAnimation.updatePosition('reverse');
            MyAnimation.updatePosition('reverse');
            
        }
        else if (key == "d") {
            MywalkAnimation.setCurrentFrameCount(frameCount);
            MywalkAnimation.drawAnimations();
            MywalkAnimation.updatePosition('forward');
            MyAnimation.updatePosition('forward');
            
        }
        else if (key == "w") {
            MywalkAnimation.setCurrentFrameCount(frameCount);
            MywalkAnimation.drawAnimations();
            MywalkAnimation.updatePosition('up');
            MyAnimation.updatePosition('up');
        }
        else if (key == "s") {
            MywalkAnimation.setCurrentFrameCount(frameCount);
            MywalkAnimation.drawAnimations();
            MywalkAnimation.updatePosition('down');
            MyAnimation.updatePosition('down');
        }
        else
        {
            MyAnimation.updatePosition('idle');
            MyAnimation.setCurrentFrameCount(frameCount);
            MyAnimation.drawAnimations();
        }
    }
    else
    {
        MyAnimation.setCurrentFrameCount(frameCount);
        MyAnimation.drawAnimations();
    }
    for (let k = 0; k < SteakbiteArray.length; k++){
        if (collideRectRect(animations[i].x, animations[i].y,animations[i].w,animations[i].h, SteakbiteArray.x, SteakbiteArray.y, 25, 25)) 
            {
            SteakbiteArray.splice(k, 1);
            score++;
            }
    }
    for (let l = 0; l < burntSteakbiteArray.length; l++) {
        if (collideRectRect(animations[i].x, animations[i].y,animations[i].w,animations[i].h, burntSteakbiteArray.x, burntSteakbiteArray.y, 25, 25))
            {
            burntSteakbiteArray.splice(l, 1);
            score--;                
            }
    } 
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
/*function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}*/

function timer() {
    if (timerValue > 0) {
        timerValue--;
    }
}

function updateIndex() {
    i++;
    if (i > 9) {
        i = 0;
    }
}
function displayScore()
{
    fill(0);
    textSize(24);
    text("Score: " + score, 50, 50);
}
function moveSteakbites(){
    for (let i = 0; i < SteakbiteArray.length; i++)
        SteakbiteArray[i].x = random(100, width - 100);
        SteakbiteArray[i].y = random(100, height - 100);
}

function moveburntSteakbites(){
    for (let i = 0; i < burntSteakbiteArray.length; i++)
        burntSteakbiteArray[i].x = random(100, width - 100);
        burntSteakbiteArray[i].y = random(100, height - 100);
}

function drawSteakbites(){
    for (let i = 0; i < SteakbiteArray.length; i++){
    SteakbiteArray[i].draw();
    }
}
function drawburntSteakbites(){
    for (let i = 0; i < burntSteakbiteArray.length; i++){
    burntSteakbiteArray[i].draw();
    }
}