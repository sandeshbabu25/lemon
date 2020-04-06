var sandesh,abhay,base,ground;
var grass,house,house2,house4;
var cloudsGroup, cloudImage;
var player;

function preload() {
  sandesh= loadImage('IMG/uy.jpg');

  ground1= loadImage("IMG/qqqq.png");
  grass1=loadImage("IMG/qe.png");
  house1=loadImage("IMG/zx.png");
}

function setup() {
  createCanvas(1365,625);
   player =createSprite(70,400,10,10);
   player.addImage("player",sandesh);

   abhay =createSprite(50,400,10,10);

   base =createSprite(1000,310,10,10);
   
   ground =createSprite(680,500,1365,20);
   ground.addImage("ground",ground1);
   ground.x=ground.width/2;

   house =createSprite(50,436,10,10);
   house.addImage("house",house1);
   house.scale =1.5;

   grass = createSprite(600,530,1365,20);
   grass.addImage ("grass",grass1);
   grass.x=grass.width/2;
}
function draw() {
  
  background(25,25,25); 
 drawSprites();

  ground.velocityX=-6;
 grass.velocityX=-4;

player.collide(ground);
abhay.collide(ground);
  spawnClouds();
 if (ground.x<0){
  ground.x=ground.width/2;
}
  if (keyDown("right")){
  sandesh.velocityX=2; 
}

if (keyDown("left")){
  sandesh.velocityX=-2;
  sandesh.x=abhay.x;

}
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(1365,30,40,10);
    var cloud1 = createSprite(600,70,40,10);
    var cloud2 = createSprite(600,110,40,10);
    var cloud3 = createSprite(600,140,40,10);
    var cloud4 = createSprite(600,190,40,10);
    var cloud5 = createSprite(600,230,40,10);
    cloud.addImage(cloud_lonely.png);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    cloud1.addImage(cloud_lonely.png);
    cloud1.scale = 0.5;
    cloud1.velocityX = -3;
   
    cloud2.addImage(cloud_lonely.png);
    cloud2.scale = 0.5;
    cloud2.velocityX = -3;

    cloud3.addImage(cloud_lonely.png);
    cloud3.scale = 0.5;
    cloud3.velocityX = -3;

    cloud4.addImage(cloud_lonely.png);
    cloud4.scale = 0.5;
    cloud4.velocityX = -3;

    cloud5.addImage(cloud_lonely.png);
    cloud5.scale = 0.5;
    cloud5.velocityX = -3;

     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}










