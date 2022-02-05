var box;




function setup() {
  createCanvas(600,600);
  
}

function draw() {
 // background(30);

box=createSprite(300,300,10,10);
box.shapeColor="red";

if (keyDown("up")) {
  box.position.y = box.position.y -5;
}
if(keyDown("space")){
  background("black");
}else{
  background("blue");
}
drawSprites();
} 





