

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score;

var arrowGroup;
var ballonsGroup;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(550, 500);
  

  //creating background
  background = createSprite (0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
 
}

function draw() {
  // moving ground
    background.velocityX = -3 
  
   bow.y = World.mouseY


    if (background.x < 0){
      background.x = background.width/2;
    }
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  var ballon_selection = Math.round(random(1,4));
  console.log(ballon_selection)
  
  if (World.frameCount%80 === 0 ){
    if (ballon_selection === 1 ){
      redBallon ();
    }else if (ballon_selection ===2){
      greenBallon (); 
    }else if (ballon_selection === 3 ){
      blueBallon ();
    }else { 
      pinkBallon();
     }    
  } 
 
  
  drawSprites(); 
  
  text("score :" + score,420,30);
  
 }  
      
    


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redBallon() {
  var red_1 = createSprite (0,Math.round(random(10,390)),10,10);
  
  red_1.addImage(red_balloonImage);
  red_1.velocityX = 3;
  red_1.scale = 0.1;
  red_1.lifetime = 150;
}  

function greenBallon() {
  var green_2 = createSprite (0,Math.round(random(10,390)),10,10)
  green_2.addImage(green_balloonImage);
  green_2.velocityX = 3;
  green_2.scale = 0.1;
  green_2.lifetime = 150;
}  

function blueBallon() {
  var blue_3 = createSprite (0,Math.round(random(10,390)),10,10)
  blue_3.addImage(blue_balloonImage);
  blue_3.velocityX = 3;
  blue_3.scale = 0.1;
  blue_3.lifetime = 150;
}  
function pinkBallon() {
  var pink_4 = createSprite (0,Math.round(random(10,390)),10,10)
  pink_4.addImage(pink_balloonImage);
  pink_4.velocityX = 3;
  pink_4.scale = 0.1;
  pink_4.lifetime = 150;
}  

  
  
  
