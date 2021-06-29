var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
//load animation for running trex
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
//picture of trex collided
    trex_collided = loadImage("trex_collided.png");
//picture of the ground
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(600, 200);
 //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
//create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
//invisible ground
    invisibleGround=createSprite(200,190,400,10)
    invisibleGround.visible=false;
}

function draw() {
    background(220);
//jump when the space button is pressed
        if (keyDown("space") && trex.y>=100) {
        trex.velocityY = -10;
        }
//give gravity to trex
        trex.velocityY = trex.velocityY + 0.8
//make ground reset
        if (ground.x < 0) {
        ground.x = ground.width / 2;
        }
        console.log(trex.y);
//make sure the trex doesn't fall through the ground
        trex.collide(invisibleGround);
    drawSprites(); 
    
}
