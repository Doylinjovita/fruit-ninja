  var PLAY=1;
  var END=0;
  var gameState=1;

  
  var sword,swordImage
  var fruit1,fruit2,fruit3,fruit4;
  var monster,monsterImage;
  var fruitGroup,enemyGroup;
  var gameover,gameoverImage;

  var score=0;

  var position;

function preload()
{
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage =loadAnimation("alien1.png","alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
}

function setup()
{
  createCanvas(450,450);
  sword = createSprite(40,200,20,20);  
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw()
{
  background("lightblue");
  
   if(gameState === PLAY){
 
  Enemy();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
  }
    else if(enemyGroup.isTouching(sword)){
      
        gameState = END;
   
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    sword.addImage(gameoverImage);
    sword.scale=1.5;
    sword.x=225;
    sword.y=225;
   }
   }
  
  
  drawSprites();
  textSize(17);
  text("Score:"+score,330,40);
  
}

function fruits(){
  
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
   
 var r=Math.round(random(1,4)); 
  if(r ===1 ) {
  fruit.addImage(fruit1);
  } else if (r === 2){
    fruit.addImage(fruit2)
  } else if (r === 3){
    fruit.addImage(fruit3)
  } else if (r === 4){
    fruit.addImage(fruit4)
  }
   fruit.y=Math.round(random(50,340));
   fruit.velocityX=-7;
   fruit.setlifetime=100;
   
   position = Math.round(random(1,2))
   {
    
  if (position ===1) {
    
     fruit.x = 400;
    fruit.velocityX = -(7 + score / 4);
  }  
    else {   
      if (position ===2) 
      {
        
      fruit.x = 0;
      fruit.velocityX = (7 + score / 4);
    }
  } 
     
}
   
   fruitGroup.add(fruit);
}

}
  
function Enemy(){
  
 if(World.frameCount%200===0){ 
 monster=createSprite(400,200,20,20);
 monster.addAnimation("moving",monsterImage);
 monster.y=Math.round(random(100,300)); 
 monster.velocityX=-(8+(score/10));
 monster.setlifetime=50;
   
 enemyGroup.add(monster);  
 }
}
