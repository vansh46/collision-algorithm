var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
fixedRect=createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "blue";
movingRect=createSprite(300, 200, 80, 30);
movingRect.shapeColor = "blue";

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    ){

     movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
     }
      else{
        movingRect.shapeColor="green"; 
        fixedRect.shapeColor="green";
     }

  drawSprites();
}