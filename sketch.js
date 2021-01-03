const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,ground2,ground;
var polygon;
var backgroundcolor;
var score=0;
var block1,block2,block3,block4,block5,block6,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
function setup(){
createCanvas(800,400);

engine = Engine.create();
world = engine.world;
ground=new Ground(50,390,1600,10);
//the bodies
ground1=new Ground(385,300,122,20);
ground2=new Ground(650,148,122,15);
//block of ground1 level 4
block1=new Block(340,288,30,25);
block2= new Block(370,288,30,25);
block3=new Block(400,288,30,25);
block4= new Block(430,288,30,25);
// level3
block5=new Block(355,263,30,25)
block6=new Block(385,263,30,25)
block7=new Block(415,263,30,25)
//level 2
block8=new Block(370,238,32,25)
block9=new Block(400,238,32,25)
//level1
block10=new Block(385,213,35,25)
//block of ground2 level 4
block11=new Block(605,128,30,25);
block12= new Block(635,128,30,25);
block13=new Block(665,128,30,25);
block14= new Block(695,128,30,25);
// level3
block15=new Block(620,103,30,25)
block16=new Block(650,103,30,25)
block17=new Block(680,103,30,25)
//level 2
block18=new Block(635,78,32,25)
block19=new Block(665,78,32,25)
//level1
block20=new Block(650,53,35,25)
polygon=new Polygon(60,205,20)
launcher = new Launcher(polygon.body,{x:120, y:205});
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);
  
}
function draw(){
  background(rgb(23,119,33));
  getBackgroundIMG();
//background(backgroundcolor);

detectcollision(block1,polygon);
detectcollision(block2,polygon);
detectcollision(block3,polygon);
detectcollision(block4,polygon);
detectcollision(block5,polygon);
detectcollision(block6,polygon);
detectcollision(block7,polygon);
detectcollision(block8,polygon);

detectcollision(block9,polygon);
detectcollision(block10,polygon);
detectcollision(block11,polygon);
detectcollision(block12,polygon);
detectcollision(block13,polygon);
detectcollision(block14,polygon);
detectcollision(block15,polygon);
detectcollision(block16,polygon);
detectcollision(block17,polygon);
detectcollision(block18,polygon);
detectcollision(block19,polygon);
detectcollision(block20,polygon);
ground.display();
ground1.display();
ground2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
polygon.display();
launcher.display();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
drawSprites();
textSize(25)
fill("white")
text("Drag the Polygon to the launch ",450,250)

textSize(25)
fill("white")
text("press'SPACE'to return the polygon",390,370)

textSize(30)
fill("Blue")
text("Score:"+score,10,60)
}
function detectcollision(lblock,lpolygon){
    // var mangoBodyPosition=lmango.body.position;
   // var stoneBodyPosition=lstone.body.position;
     
     var distance=dist(lpolygon.body.position.x,lpolygon.body.position.y,lblock.body.position.x,lblock.body.position.y);
     //console.log(lblock.width+lpolygon.r)
     if(distance<=lblock.height+lpolygon.r){
       
       Matter.Body.setStatic(lblock.body,false);
     }
   }
   function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
   // console.log("released");
    launcher.fly();
  }
  function keyPressed(){
  if( keyCode === 32){
  Matter.Body.setPosition(polygon.body,{x:50,y:1})
  launcher.attach(polygon.body);
  }
}
async function getBackgroundIMG(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  
  var datetime=responseJSON.dateTime;
  
   if(datetime != undefined)  {
    var hour=datetime.slice (11,13)
    
    if(hour>=06 && hour<=18){
      background(rgb(166,222,250))

  
    }else{
      background(rgb(23,119,33))
    }
   }      
 
 // backgroundImg = loadImage(bg)
 // console.log(backgroundImg)
}
