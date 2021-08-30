var SPIDERMAN , SPIDERMANImg,
var GREENGOBLIN , GREENGOBLINImg, 


function preload()
{
 SPIDERMANImg = loadImage("IMAGES/SPIDER-MAN.png");
 GREENGOBLINImg = loadImage("IMAGES/GREEN-GOBLIN.png");
}

function setup() {
	createCanvas(800, 700);
  SPIDERMAN =  createSprite(100,200 , 50,50);
  SPIDERMAN.addImage(SPIDERMANImg);
  SPIDERMAN.scale = 0.1;

  GREENGOBLIN =  createSprite(200,200 , 50,50);
  GREENGOBLIN.addImage(GREENGOBLINImg);
  GREENGOBLIN.scale = 0.1;
}


function draw() {
  background(0);

  if(keyDown('UP_ARROW')){
    SPIDERMAN.velocityY = -1;
  }
  if(keyDown('DOWN_ARROW')){
    SPIDERMAN.velocityY = 1;
  }
  if(keyDown('RIGHT_ARROW')){
    SPIDERMAN.velocityX = 1;
  }
  if(keyDown('LEFT_ARROW')){
    SPIDERMAN.velocityX = -1;
  }
  
  drawSprites();
  
  
 
}
