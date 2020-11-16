var fixedRect, movingRect;
var ob1, ob2;

function setup() {
  createCanvas(1200,600);

  fixedRect = createSprite(100, 200, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  fixedRect.velocityX = 5;

  movingRect = createSprite(500,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  

  movingRect.velocityX = -5;

  ob1 = createSprite(200,100,50,50);
  ob1.shapeColor = "green";
  ob1.velocityY = 2;

  ob2 = createSprite(200,600,50,50);
  ob2.shapeColor = "pink";
  ob2.velocityY = -2;

}

function draw() {
  background(0);  


 bounceOff(movingRect, fixedRect);

 bounceOff(ob1, ob2)



  drawSprites();
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2) {

      object2.velocityX = object2.velocityX* (-1);
      object1.velocityX = object1.velocityX* (-1);
    }

   if (object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2){
      
      object2.velocityY = object2.velocityY* (-1);
      object1.velocityY = object1.velocityY* (-1);
    }
}