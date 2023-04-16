var bg
var ship
var iceberg
var fireball
function preload(){
  bgImage = loadImage("ocean.png")
  shipImage = loadImage("ship.png")
  icebergImage = loadImage("iceberg.png")
  fireballImage = loadImage("fireball.png")
}

function setup() {
  createCanvas(1000,600);
  icebergs = new Group()
  bg=createSprite(width/2,560,width,height)
  bg.addImage ("ground",bgImage)
  bg.scale= 0.2
  bg.velocityX = -2


  ship = createSprite(110,height-200)
  ship.addImage ("ship",shipImage)
  ship.scale = 0.1
  
  fireball = createSprite(ship.x,ship.y)
  fireball.addImage ("fireball",fireballImage)
  fireball.scale = 0.3
  fireball.visible = false
}


function draw() {
  background(5);
  if (bg.x < 375){
    bg.x = 500;
  }
   
 spawnicebergs()
  drawSprites()
}
 
function spawnicebergs(){
  if (frameCount % 200 === 0){
    var iceberg = createSprite(1000,height-245)
    iceberg.addImage(icebergImage)
    iceberg.scale = 0.2
    iceberg.velocityX = -3
    icebergs.add(iceberg)
  }
}

