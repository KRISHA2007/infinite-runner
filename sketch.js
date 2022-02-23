var space,spaceImg
var meteors,meteorsImg, meteorsGroup
var rocket,rocketImg



var gameState = "play"

function preload(){
spaceImg = loadImage("images.jpg")
meteorsImg = loadImage("m-removebg-preview.png")
rocketImg = loadImage("rocket-removebg-preview.png")
}



function setup(){

  createCanvas(600,600)

space =  createSprite(300,300)
space.addImage("space",spaceImg)
space.scale=3
space.velocityY=1


rocket = createSprite(200,200,50,50);
rocket.scale = 0.5;
rocket.addImage("rocket", rocketImg);
}



function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      rocket.x = rocket.x - 3;
    }
    
    if(keyDown("right_arrow")){
      rocket.x = rocket.x + 3;
    }
    
    if(keyDown("space")){
      rocket.velocityY = -10;
    }
    
    rocket.velocityY = rocket.velocityY + 0.8
    
    if(space.y > 400){
      space.y = 300
    }

    spawnMeteors();

    if(meteorsGroup.isTouching(rocket)){
      rocket.velocityY = 0;
    }
    if(rocket.y > 600){
      rocket.destroy();
      gameState = "end"
    }

    drawSprites();

  }
  
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

}
function spawnMeteors(){

  if (frameCount % 100 === 0) {
 var meteors = createSprite(200,-50)
  meteors.x = Math.round(random(100,350));
  meteors.addImage(meteorsImg);
  meteors.velocityY = 1;
  meteors.lifetime = 800;
  meteors.scale=0.3


 meteorsGroup.add(meteors)
 
}
}
