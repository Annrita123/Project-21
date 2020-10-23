var bullet,wall,thickness,bulletRightEdge,wallLeftEdge;
var speed,weight,damage;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);

  
 
}

function draw() {
  background("blue");  

 

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(225,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    
    }
  
  drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
}