var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["97dfc955-9136-4731-9629-d6b9efde9395","90f75f12-a855-4809-aa1a-6a0221a5cc12","650f259e-bd44-4892-86a2-19fd190ff889","ac741787-8edf-4965-ada8-142432184010","92fbcfd8-c544-4b6b-8056-8ca3f4e9f370","10ed9fba-ea02-4f3f-b971-341d14cf4b65"],"propsByKey":{"97dfc955-9136-4731-9629-d6b9efde9395":{"name":"cow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq/category_animals/cow.png","frameSize":{"x":265,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq","loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jkGGDMsiziTYLK..zKwv1rOeYZFoFvHq/category_animals/cow.png"},"90f75f12-a855-4809-aa1a-6a0221a5cc12":{"name":"cow_1_copy_1","sourceUrl":null,"frameSize":{"x":50,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"80drebf5U6JRPylewCTeYTzzYzol6duQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":57},"rootRelativePath":"assets/90f75f12-a855-4809-aa1a-6a0221a5cc12.png"},"650f259e-bd44-4892-86a2-19fd190ff889":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/aKdIMfQ6ZOpZAiQLYFZjgwSjbxifm1eU/category_backgrounds/sunshine_showers.png"},"ac741787-8edf-4965-ada8-142432184010":{"name":"grass_top_1","sourceUrl":"assets/api/v1/animation-library/gamelab/64X6Q0mB0BfbG5xNz8dMsYC45aEyNyRK/category_environment/grass_top.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"64X6Q0mB0BfbG5xNz8dMsYC45aEyNyRK","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/64X6Q0mB0BfbG5xNz8dMsYC45aEyNyRK/category_environment/grass_top.png"},"92fbcfd8-c544-4b6b-8056-8ca3f4e9f370":{"name":"beet_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zq20BNi15Na_FQbOBajnffWgVv1areIl/category_food/beet.png","frameSize":{"x":491,"y":705},"frameCount":1,"looping":true,"frameDelay":2,"version":"zq20BNi15Na_FQbOBajnffWgVv1areIl","loadedFromSource":true,"saved":true,"sourceSize":{"x":491,"y":705},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zq20BNi15Na_FQbOBajnffWgVv1areIl/category_food/beet.png"},"10ed9fba-ea02-4f3f-b971-341d14cf4b65":{"name":"follow the path","sourceUrl":"assets/v3/animations/lE5fi2DpFzuai0f-NhfI_MiBvbsJRcPahtE6wM6Zkqw/10ed9fba-ea02-4f3f-b971-341d14cf4b65.png","frameSize":{"x":138,"y":73},"frameCount":1,"looping":true,"frameDelay":4,"version":"nsVT3DNV57w2z48N3FseryFGRSIJtKtt","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":73},"rootRelativePath":"assets/v3/animations/lE5fi2DpFzuai0f-NhfI_MiBvbsJRcPahtE6wM6Zkqw/10ed9fba-ea02-4f3f-b971-341d14cf4b65.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*var Bg= createSprite(200,200,400,400);
Bg.setAnimation("grass_top_1");
Bg.scale=3;*/

var cow = createSprite(50, 30,50,30);
cow.setAnimation("cow_1");
cow.scale=0.15;
var wall=createSprite(100,100,250,10);
wall.shapeColor ="yellow";
var wall1=createSprite(300,170,250,10);
wall1.shapeColor ="blue";
var wall2=createSprite(100,240,250,10);
wall2.shapeColor ="red";
var wall3=createSprite(250,320,300,10);
wall3.shapeColor ="crimson";
var food= createSprite(30,380,20,20)
food.setAnimation("beet_1");
food.scale=0.05;
//food.visible=true;
var text1=createSprite(230,50,20,100);
text1.setAnimation("follow the path")
text1.scale=0.5;
text1.visible=false;
createEdgeSprites();
var gamestate="start";

function draw() {
  background("pink");
     
    
  
  if(gamestate==="start"){
    textSize(20);
    stroke("white");
    strokeWeight(20);
    text("Eat the Beet",150,50)
    text1.visible=false;
   
    
  }
  
  if(cow.velocityY>0||cow.velocityx>0 && gamestate==="start"){
    gamestate="play";
   
  }
  if(cow.x<0||cow.x>400||cow.y<0||cow.y>400){
    gamestate="end";
    textSize(25);
    text("your cow has gone to Void",100,280);
  }
  
  if(gamestate==="end" && keyDown("space")){
    
    gamestate="start";
    
  }
  
   if(cow.collide(wall)||cow.collide(wall1)||cow.collide(wall2)||cow.collide(wall3))
    {
  
    text1.visible=true;
    gamestate="stop";
    reset();
    }
    if(gamestate==="stop" && keyDown("down")){
      gamestate="start";
  
    }
  
  if(food.y>400 ){
    gamestate="end";
    textSize(20);
    text("Thank You for the food",100,280);
    text("press Space to start",180,50)
     
     cow.X=38;
    cow.Y=362;
    cow.velocityX=0;
    cow.velocityY=0;
    playSound("assets/category_animals/cow.mp3");
    
  }
 
  cow.displace(food);
  movecow();
  drawSprites();
}


function movecow(){
  if(keyDown(UP_ARROW))
  {
    cow.velocityX=0;
    cow.velocityY=-2;
      }
  if(keyDown(DOWN_ARROW))
  {
    cow.velocityX=0;
    cow.velocityY=2;
      }
      if(keyDown(RIGHT_ARROW))
  {
    cow.velocityX=2;
    cow.velocityY=0;
      }
      if(keyDown(LEFT_ARROW))
  {
    cow.velocityX=-2;
    cow.velocityY=0;
      }
}
function reset(){
  cow.velocityX=0;
  cow.velocityY=0;
  cow.x=50;
  cow.y=30;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
