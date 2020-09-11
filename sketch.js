var fixedRect , movingRect
function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapecolor="green";
  movingRect = createSprite(500,500,60,70);
  movingRect.shapecolor="green";
}

function draw() {
  background(0,0,0)
  movingRect.x = world.mouseX;
  movingRect.y = world.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
     movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    movingRect.shapecolor="red";
    fixedRect.shapecolor="red";
  }else{
    movingRect.shapecolor="green";
    fixedRect.shapecolor="green";
  }
  drawSprites();
}