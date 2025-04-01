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
var i = 0;
var j = 0;

var SteakbiteArray = [];
var SteakbitesFound = false;
var burntSteakbiteArray = [];
var burntSteakbitesFound = false;

var score = 0;
var health = 15;

var r = 25;
var idlePaths = [];
var walkPaths = [];


var mySound;
var munchSound;
var bonkSound;

var Barrier;
var Barrier2;
var Barrier3;

var ToddHoward;
var ToddHoward2;
var ToddHoward3;
var ToddHoward4;
var ToddHoward5;

var ToddHowardHealth = 100;
var ToddHowardHealth2 = 100;
var ToddHowardHealth3 = 100;
var ToddHowardHealth4 = 100;
var ToddHowardHealth5 = 100;

var ToddHowardHealthPool = 5;

const particles = [];

function preload() {
    
    soundFormats("mp3");

    mySound = loadSound('sounds/790811__collectionofmemories__celtic-loop-2.wav');
    munchSound = loadSound("sounds/64324__sir-smith__popcorn_bite.wav");
    bonkSound = loadSound("sounds/466202__harrisando__bonk.wav")

    idlePaths = loadStrings("images/png/idle.txt");
    walkPaths = loadStrings("images/png/walk.txt");
    attackPaths = loadStrings("images/png/attack.txt")
    
}

function setup()
{
    mySound.play();

    steak_1 = loadImage('images/Steak-Transparent-Free-PNG.png');
    steak_2 = loadImage('images/OIP.jpg');
    ChatGPT_steak = loadImage('images/Chat GPT Steak.png');
    newFont = loadFont('fonts/ShadowsIntoLight-Regular.ttf');
    createCanvas(600,700)
    TableXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    TableYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    

    MyAnimation = new animationImages(150, 150, 150, 150);
    MyAnimation.loadAnimation('idle', idlePaths);
    MyAnimation.loadAnimation('walk', walkPaths);
    MyAnimation.loadAnimation('attack', attackPaths);

    setInterval (timer, 1000)

    for (let i = 0; i < 20; i++){
        mySteakbites = new Steakbites(random(100, 500), random(100,500));
        SteakbiteArray.push(mySteakbites); 
    }

    for (let i = 0; i < 20; i++){
        myburntSteakbites = new burntSteakbites(random(100, 500), random(100,500));
        burntSteakbiteArray.push(myburntSteakbites); 
    }

    
    Barrier = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    Barrier.img = "images/green-circle-icon-28.png"
    Barrier.scale = 0.15;
    Barrier.diameter = 100;

    Barrier2 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    Barrier2.img = "images/green-circle-icon-28.png"
    Barrier2.scale = 0.15;
    Barrier2.diameter = 100;

    Barrier3 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    Barrier3.img = "images/green-circle-icon-28.png"
    Barrier3.scale = 0.15;
    Barrier3.diameter = 100;

    ToddHoward = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    ToddHoward.img = "images/Todd Coward.png"
    ToddHoward.scale = 0.10;
    ToddHoward.diameter = 100;

    ToddHoward2 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    ToddHoward2.img = "images/Todd Coward.png"
    ToddHoward2.scale = 0.10;
    ToddHoward2.diameter = 100;

    ToddHoward3 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    ToddHoward3.img = "images/Todd Coward.png"
    ToddHoward3.scale = 0.10;
    ToddHoward3.diameter = 100;

    ToddHoward4 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    ToddHoward4.img = "images/Todd Coward.png"
    ToddHoward4.scale = 0.10;
    ToddHoward4.diameter = 100;

    ToddHoward5 = createSprite(random(100, 600), random(100, 600), 50, 50, 'static');
    ToddHoward5.img = "images/Todd Coward.png"
    ToddHoward5.scale = 0.10;
    ToddHoward5.diameter = 100;
}

function draw()
{
    background(50,100,200);
    
    fill(200)
    table();
    
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
    Steak1();

    Steak2();

    image(ChatGPT_steak, 400, 150)

    SomeText();

    drawAllSteakbites();

    playerMovement();
    
    AllSteakbiteCollision();
        
    healthbar()
      
    gamewin()

    ToddHowardWin()
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

function healthbar() {
    text("Health: " + health, 50, 690);
    if (health <= 0) {
        textSize(30)
        text("You Lose.", 250, 300);
    }
}

function gamewin() {
    if (health > 0 && score >= 10) { 
        textSize(30)
        text("You Win!", 250, 300);
    }
}
function Steak1() {
    image(steak_1, steak_1X, steak_1Y);
    steak_1Y += steak_1Speed;
    if(steak_1Y >= width - steak_1.width || steak_1Y <= steak_1.width/2)
    {
        steak_1Speed *= -steak_1;
    }
}
function Steak2() {
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
}
function SomeText() {
    fill(250)
    textFont(newFont);
    textSize(20)
    text('Sliding Table Makes the Cut', 300, 20);
    text('Nate Roske', 490, 690);

    fill(0);
    textSize(24);
    text("Score: " + score, 50, 50);
}
function drawAllSteakbites() {
    for (let i = 0; i < SteakbiteArray.length; i++){
        SteakbiteArray[i].draw();
        }

    for (let i = 0; i < burntSteakbiteArray.length; i++){
        burntSteakbiteArray[i].draw();
        }
}
function playerMovement() {
    if (kb.pressing("a")) {
               
        MyAnimation.drawAnimations('walk');
        MyAnimation.updatePosition('reverse');
        if(MyAnimation.isColliding(Barrier))
        {
            MyAnimation.drawAnimations('idle');
            MyAnimation.updatePosition('idle');
        }
        else if(MyAnimation.isColliding(Barrier2))
            {
                MyAnimation.drawAnimations('idle');
                MyAnimation.updatePosition('idle');
            }
        else if(MyAnimation.isColliding(Barrier3))
            {
                MyAnimation.drawAnimations('idle');
                MyAnimation.updatePosition('idle');
            }
               
    }
    else if (kb.pressing("d")) {
        
        MyAnimation.drawAnimations('walk');
        MyAnimation.updatePosition('forward');
        
    }
    else if (kb.pressing("w")) {
        
        MyAnimation.drawAnimations('walk');
        MyAnimation.updatePosition('up');
    }
    else if (kb.pressing("s")) {
        
        MyAnimation.drawAnimations('walk');
        MyAnimation.updatePosition('down');
    }
    else if (kb.pressing("x")) {
        MyAnimation.drawAnimations('attack');
        if (ToddHoward != null) {
            if (dist(MyAnimation.getCurrentAnimation().position.x, MyAnimation.getCurrentAnimation().position.y, ToddHoward.position.x, ToddHoward.position.y) < 200) {
                createParticles(ToddHoward.position.x, ToddHoward.position.y);
                ToddHowardHealth -= 1;
                if(ToddHowardHealth <= 0)
                    {
                        ToddHoward.remove()
                        ToddHowardHealthPool--;
                        score++;
                        munchSound.play();
                        ToddHoward = null;
                    }
                }    
        }

        if (ToddHoward2 != null) {
            if (dist(MyAnimation.getCurrentAnimation().position.x, MyAnimation.getCurrentAnimation().position.y, ToddHoward2.position.x, ToddHoward2.position.y) < 200) {
                createParticles(ToddHoward2.position.x, ToddHoward2.position.y);
                ToddHowardHealth2 -= 1;
                if(ToddHowardHealth2 <= 0)
                    {
                        ToddHoward2.remove()
                        ToddHowardHealthPool--;
                        score++;
                        munchSound.play();
                        ToddHoward2 = null;
                    }
                }    
        }
        if (ToddHoward3 != null) {
            if (dist(MyAnimation.getCurrentAnimation().position.x, MyAnimation.getCurrentAnimation().position.y, ToddHoward3.position.x, ToddHoward3.position.y) < 200) {
                createParticles(ToddHoward3.position.x, ToddHoward3.position.y);
                ToddHowardHealth3 -= 1;
                if(ToddHowardHealth3 <= 0)
                    {
                        ToddHoward3.remove()
                        ToddHowardHealthPool--;
                        score++;
                        munchSound.play();
                        ToddHoward3 = null;
                    }
                }    
        }
        if (ToddHoward4 != null) {
            if (dist(MyAnimation.getCurrentAnimation().position.x, MyAnimation.getCurrentAnimation().position.y, ToddHoward4.position.x, ToddHoward4.position.y) < 200) {
                createParticles(ToddHoward4.position.x, ToddHoward4.position.y);
                ToddHowardHealth4 -= 1;
                if(ToddHowardHealth4 <= 0)
                    {
                        ToddHoward4.remove()
                        ToddHowardHealthPool--;
                        score++;
                        munchSound.play();
                        ToddHoward4 = null;
                    }
                }    
        }
        if (ToddHoward5 != null) {
            if (dist(MyAnimation.getCurrentAnimation().position.x, MyAnimation.getCurrentAnimation().position.y, ToddHoward5.position.x, ToddHoward5.position.y) < 200) {
                createParticles(ToddHoward5.position.x, ToddHoward5.position.y);
                ToddHowardHealth5 -= 1;
                if(ToddHowardHealth5 <= 0)
                    {
                        ToddHoward5.remove()
                        ToddHowardHealthPool--;
                        score++;
                        munchSound.play();
                        ToddHoward5 = null;
                    }
                }    
        }
        
            
    }    
        
        
    else
        {
        MyAnimation.drawAnimations('idle');
        }
    }

function AllSteakbiteCollision() 
    {
    for (let k = 0; k < SteakbiteArray.length; k++){
        if (MyAnimation.isColliding(SteakbiteArray[k].SteakbitePiece)) 
            {
            SteakbiteArray[k].SteakbitePiece.remove();
            score++;
            munchSound.play();
            }
        }
    for (let l = 0; l < burntSteakbiteArray.length; l++) {
        if (MyAnimation.isColliding(burntSteakbiteArray[l].burntSteakbitePiece))
            {
            burntSteakbiteArray[l].burntSteakbitePiece.remove();
            score--;
            health--;
            bonkSound.play();              
            }
        
        }
    }

function ToddHowardWin() {
if (ToddHowardHealthPool <= 0)
    {
    fill(255, 223, 0)
    textSize(30)
    text("You Beat Todd Howard and His Legion of Clones!", 50, 600);
    }
}
function createParticles(x,y) 
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
}
for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
        particles.splice(i,1);
    }
    }
}