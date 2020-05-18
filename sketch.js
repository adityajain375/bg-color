
var r;
var g;
var b;
var ell;
var rand;
var col;

function setup(){
  createCanvas(1275,1275);
  rand = random(0,255);
  ell = createSprite(200,200,20,20);
}


function draw(){
background("black");
ell.x = mouseX;
ell.y = mouseY;
r = ell.x/5;
  g = ell.y/5;
  b = rand;
ell.shapeColor = rgb(g,b,r);
background(r,g,b);
drawSprites();
}