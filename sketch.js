var player1,player1img
var player2,player2img

function preload() {
  player1img=loadAnimation("images/player1.gif")
  player2img=loadAnimation("images/player2.gif")
}

function setup() {
  canvas = createCanvas(1000,500)
  player1 = createSprite(200,200,10,10)
  player1.scale = 0.5;
  player1.addAnimation("player1",player1img)

  player2 = createSprite(400,400,10,10)
  player2.addAnimation("player2",player2img)
  player2.scale = 0.5;
}

function draw() {

background("black")

if (keyDown("UP_ARROW")){
  player1.velocityY = -2
}

  drawSprites()
}