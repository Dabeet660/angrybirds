var movingSpite, fixedSprite; 

function setup() {
  createCanvas(800,400);
  movingSpite = createSprite(100,200,10,20)
  fixedSprite = createSprite(400, 200, 50, 50);
}

function draw() {
   movingSpite.x = World.mouseX;
   movingSpite.y = World.mouseY;
  background(255,255,255);
  
  if(movingSpite.x - fixedSprite.x < movingSpite.width / 2 + fixedSprite.width / 2 && fixedSprite.x - movingSpite.x < movingSpite.width / 2 + fixedSprite.width / 2 && movingSpite.y - fixedSprite.y < movingSpite.height/2 + fixedSprite.height/2 && fixedSprite.y - movingSpite.y < movingSpite.height/2 + fixedSprite.height/2){
    movingSpite.shapeColor = "red";
    fixedSprite.shapeColor = "red";
  } else {
    movingSpite.shapeColor = "green";
   fixedSprite.shapeColor = "green";
  }
  drawSprites();
}