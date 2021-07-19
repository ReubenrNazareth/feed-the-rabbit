var garden,rabbit;
var gardenImg,rabbitImg;

var apples, applesGroup, applesImage ;
var leaves, leavesGroup, leavesImage ;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImage = loadImage("apple.png")
  leavesImage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX ;

  spawnLeaves();
  spawnApples();
  

  drawSprites();
}

function spawnApples() {

  if (frameCount % 60 === 0) {
    apples = createSprite(100,100,100,10);
    apples.addImage(applesImage)
    apples.x = Math.round(random(10,400))
    apples.scale = 0.1;
    apples.velocityY = 3;

    apples.lifetime = -50;
  }
}

  function spawnLeaves () {

    if (frameCount % 60 === 0) {
      leaves = createSprite(100,100,100,10);
      leaves.addImage(leavesImage);
      leaves.x = Math.round(random(10,400));
      leaves.scale = 0.1;
      leaves.velocityY = 3;
  
      leaves.lifetime = -50;
    }    
  }
