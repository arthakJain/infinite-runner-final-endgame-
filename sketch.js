var gameState="play"
function preload(){
bgImg=loadAnimation("bg1.jpg")
bgImg2=loadAnimation("bg2.jpg")
bgImg3=loadAnimation("bg3.jpg")
rocketImg=loadAnimation("rocket.png")
coinImg=loadAnimation("coin3.png")
asteroidImg=loadAnimation("asteroid.png")
}

function setup() {
 createCanvas(400,400)
 bg=createSprite(200,200,400,400)
 bg.addAnimation("i",bgImg)
 bg.addAnimation("i2",bgImg2)
 bg.addAnimation("i3",bgImg3)
 bg.scale=2.2

 rocket=createSprite(150,200)
 rocket.addAnimation("r",rocketImg)
 rocket.scale=0.9

 coin=createSprite(300,200)
 coin.addAnimation("c",coinImg)
 coin.scale=0.3

coin.debug=false
rocket.debug=false
rocket.setCollider("rectangle" ,0,0,100,50)
coin.setCollider("rectangle" ,0,0,130,100)

b1=createSprite(200,1,400,5)
b2=createSprite(200,400,400,5)
b3=createSprite(400,5,5,800)
b4=createSprite(1,200,5,800)

b1.visible=false
b2.visible=false
b3.visible=false
b4.visible=false

asteroidGroup=new Group()
}

function draw() {
 background("black")
if(gameState==="play"){
bg.addAnimation("i",bgImg)

}
if(keyDown (LEFT_ARROW)){
  rocket.x -=2
    }
    if(keyDown (RIGHT_ARROW)){
        rocket.x +=2
        } 
    
        if(keyDown (UP_ARROW)){
            rocket.y -=2
            } 
    
            if(keyDown (DOWN_ARROW)){
                rocket.y +=2
                } 

  rocket.collide(b1)   
  rocket.collide(b2)           
  rocket.collide(b3)
  rocket.collide(b4)

  drawSprites() 
  if(rocket.isTouching(asteroidGroup)){
    gameState="end"

  }
if(gameState==="end"){
  textSize(30)
  fill("white")
   text("GAME OVER",100,200)
   asteroidGroup.setVelocityXEach(0)
   rocket.destroy()
}
 
        
        
 if(rocket.isTouching(coin)){
    gameState="play2"
 }       
  if(gameState==="play2"){
    bg.changeAnimation("i2",bgImg2)
    coin.destroy()
    createAsteroids()
    coin2=createSprite(400,200,20,20)
    coin2.addAnimation("c2",coinImg)
    coin2.scale=0.3
    
    if(rocket.isTouching(coin2)){
     gameState="end1"
    }      
  }      
  if(gameState==="end1"){
    bg.changeAnimation("i3",bgImg3)
      asteroidGroup.destroyEach()
      rocket.destroy()  
      textSize(24)
      fill("white")
      text("YOU WIN",150,200) 

  }      
  
        }

function createAsteroids(){
  if(frameCount%40===0){
    asteroid=createSprite(400,random(0,400),100,100)
    asteroid.addAnimation("a",asteroidImg)
    asteroid.velocityX=-3
    asteroid.scale=0.5
    asteroidGroup.add(asteroid)
    asteroid.debug=false
    asteroid.setCollider("rectangle",0,0,100,100)
  }
}





