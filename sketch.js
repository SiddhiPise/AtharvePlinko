var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=250;
var ground, particle, turn, particle1;

var score =0;
var turn = 0;
var gameState = "START";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(800/2,800,800,20);
 
 
  

  



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 675, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 textSize(25);
 fill("fuchsia");
 text("400", 420, 575);
 text("400", 340, 575);
 text("350", 260, 575);
 text("350", 500, 575);
 text("300", 580, 575);
 text("300", 180, 575);
 text("250", 100, 575);
 text("250", 660, 575);
 text("200", 740, 575);
 text("200", 20, 575);

 
  Engine.update(engine);
  ground.display();
 
  if ( gameState =="END") {
    
    textSize(100);
    text("GameOver", 150, 250);
    
  }


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
  if(particle != null) {
    particle.display();
    //particle1.display();
      if(particle.body.position.y > 550) {

        if(particle.body.position.x > 5 && particle.body.position.x < 75) {

          score = score + 200;
          particle = null;
          if(turn >= 5) 
            gameState="END";
                  
      }

      }
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
   /*if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 100,20));
   score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
   particles[j].display();
  } */
   
   
}

function mousePressed() {
 
    if(gameState !== "END") {
      turn++;
      particle = new Particle(mouseX, 400, 10);
      //particle.display();
      //console.log(turn);      
      
    
  }
     
}
