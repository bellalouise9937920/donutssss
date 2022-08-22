var fundo;
var snake;
var column1;
var column2;
var column3;
var column4;
var cloud;
var standclouds;
var lyingclouds;
var standclouds2;
var donut;
var donut_Img;
var points= 0;

function preload () {
cloud = loadImage ("clouds.png");
standclouds = loadImage ("standingclouds.png");
lyingclouds = loadImage ("nn.png");
standclouds2 = loadImage ("ss.png");
donut_Img= loadImage ("donut.png");
}
function setup () {
createCanvas (1000,500);
snake = createSprite (200, 200, 50, 50);

donut = createSprite (300,300,10,10);
donut.addImage (donut_Img);
donut.scale= 0.2;

//parede esquerda
column1 =createSprite (25, 40, 20, 1000);
column1.shapeColor= "black";
column1.addImage (standclouds);
column1.scale = 1.5;

//parede direita
column2 =createSprite (970, 285, 20, 1000);
column2.shapeColor= "black";
column2.addImage (standclouds2);
column2.scale = 1.5;

//parede de cima
column3 =createSprite (40, 30, 1550, 20); 
column3.shapeColor= "black";
column3.addImage (lyingclouds);
column3.scale = 1.5;

//parede de baixo 
column4 =createSprite (657, 474, 1500, 40);
column4.shapeColor= "black";
column4.addImage (cloud);
column4.scale = 1.5;
}

function draw () {
background ("SkyBlue");
text ("pontos"+ points, 903, 45);
text (mouseX + "," + mouseY, mouseX, mouseY);
if (keyDown("up_arrow")) {
snake.velocityY= -0.01;
}

if (keyDown("down_arrow")) {
snake.velocityY= 0.01;
}

if (keyDown("right_arrow")) {
snake.velocityX= 0.01;
}

if (keyDown("left_arrow")) {
snake.velocityX= -0.01;
}

if (snake.collide(donut)) {
donut.x= Math.round(random(20, 700));
donut.y= Math.round(random(20, 250));
points+= 1;
}
 
drawSprites ();
}

