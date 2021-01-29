var tom, tomImage, jerry, jerryImage, bg;

function preload(){
  
  tomImage = loadImage("tomOne.png");
  jerryImage = loadImage("jerryOne.png");
  tomMoving = loadAnimation("tomThree.png","tomTwo.png");
  tomzz = loadAnimation("tomFour.png");
  jerryTeasing = loadAnimation("jerryFour.png","jerryTwo.png","jerryOne.png");
  jerryCaught = loadAnimation("jerryThree.png");
  bgImage = loadImage("garden.png");
}

function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("catrunning",tomMoving);
    tom.changeAnimation("catrunning",tomMoving);
    tom.addAnimation("tomm",tomzz);
    jerry.addAnimation("jerry",jerryCaught);
    
  }
  
}
  


function setup() {
  createCanvas(1200,800);
  
  bg =    createSprite(0,0,0,0);
  bg.addImage(bgImage);
  bg.scale = 2.9;
  
  tom = createSprite(1075, 400, 3, 2);
  tom.addImage(tomImage); 
  
  
  tom.debug = false; 
  tom.setCollider("circle",0,0,500)
  tom.scale = 0.2;    
  
  jerry = createSprite(100,400,3,2);
  
  jerry.addAnimation("mousetease",jerryTeasing);
  
  jerry.scale = 0.1;
  jerry.debug = false;
  jerry.setCollider("circle",0,0,600);
  
}

function draw() {
  background(228);  
  
  keyPressed();
   
  if(jerry.x - tom.x < jerry.width/2 + tom.width/2
    && tom.x - jerry.x < tom.width/2 + jerry.width/2){
      tom.velocityX = tom.velocityX *(-1);
      jerry.velocityX = jerry.velocityX *(-1);
      tom.velocityX = 0;
      jerry.changeAnimation("jerry",jerryCaught);
      tom.changeAnimation("tomm",tomzz);
    }
 
    
  
  
   
    
  
  drawSprites();

  
}
