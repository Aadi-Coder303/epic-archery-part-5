// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//EPIC ARCHERY PART - 4

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerQuiver;
var computer, computerBase, computerQuiver;

//Declare an array for arrows playerArrows = [ ]
var playerArrows = [];
var computerArrows = []
var arrow;

//Declare the varibales to add 3 life for player and computerplayer
var playerLife = 3 ,computerLife = 3;

//setting animation for the background
function preload()
{
  backgroundImg = loadImage("assets/background.gif")
}


function setup() 
{
  //creatinga canvas as big as srceen 
  canvas = createCanvas(windowWidth, windowHeight);

  //created engine and world
  engine = Engine.create();
  world = engine.world;

  //Creative player base, player, player Quiver and player archer
  playerBase = new PlayerBase(
    300, 
    random(450, height - 300), 
    180, 
    150
    );

  player = new Player(playerBase.body.position.x, 
    playerBase.body.position.y - 153, 
    200, 
    230);

    playerQuiver = new PlayerQuiver(
      playerBase.body.position.x- 75 ,
      player.body.position.y+10,
      100,
      100
    )

  playerArcher = new PlayerArcher(
    330,
    playerBase.body.position.y - 180,
    120,
    150
  );


  //Creative computer base, computer, computer Quiver and computer archer
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    170,
    230
  );
  computerArcher = new ComputerArcher(
    width - 350,
    computerBase.body.position.y - 200,
    150,
    170
  );

  computerQuiver = new ComputerQuiver(
    computerBase.body.position.x+ 100 ,
    computer.body.position.y+20,
    100,
    100
  )

  //Function to manage computer Arrows
  handleComputerArcher(); 


}

function draw() 
{
  //giving backgroung background image
  background(backgroundImg);

  //Updated the engine
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 //displayingExplain everything everything
  playerBase.display();
  player.display();
  playerQuiver.display();
  
  computerQuiver.display();
  computerBase.display();
  computer.display();
  
  
  playerArcher.display();
  computerArcher.display()

 // Use for loop to display arrow using showArrow() function
  for (var i = 0; i < playerArrows.length; i++) 
 {
    showArrows(i, playerArrows);
 }

for (var i = 0; i < computerArrows.length; i++) 
{
  showArrows(i, computerArrows);
}


//Call functions to detect collision for player and computer
handlePlayerArrowCollision();
handleComputerArrowCollision()

player.life();
computer.life();
}

function keyPressed() 
{

  if(keyCode === 32)
  {
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;

    var arrow = new PlayerArrow(posX, posY+50, 200, 200);

    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);

  }
}

function keyReleased () 
{

  if(keyCode === 32)
  {
    //call shoot() function for each arrow in an array playerArrows
    if (playerArrows.length) 
    {
      var angle = playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
//Display arrow and Tranjectory
function showArrows(index, arrows) 
{
  arrows[index].display();
}

function handleComputerArcher() 
{
  if (!computerArcher.collapse && !playerArcher.collapse) 
  {
    setTimeout(() => 
    {
      var pos = computerArcher.body.position;
      var angle = computerArcher.body.angle;
      var moves = ["UP", "DOWN"];
      var move = random(moves);
      var angleValue;

      if (move === "UP") 
      {
        angleValue = 0.1;
      } else {
        angleValue = -0.1;
      }
      angle += angleValue;

      var arrow = new ComputerArrow(pos.x, pos.y, 180, 180, angle);

      Matter.Body.setAngle(computerArcher.body, angle);
      Matter.Body.setAngle(computerArcher.body, angle);

      computerArrows.push(arrow);
      setTimeout(() => 
      {
        computerArrows[computerArrows.length - 1].shoot(angle);
      }, 100);

      handleComputerArcher();
    }, 2000);
  }
}

function handlePlayerArrowCollision() 
{
  // Write code to detect collision between player arrow and opponent
  for (var i = 0; i < playerArrows.length; i++) 
  {
    var baseCollision = Matter.SAT.collides( 
      playerArrows[i].body, 
      computerBase.body 
      ); 

    var archerCollision = Matter.SAT.collides( 
      playerArrows[i].body, 
      computerArcher.body 
      );
      
    var computerCollision = Matter.SAT.collides(
      playerArrows[i].body, 
      computer.body 
      ); 
    if ( baseCollision.collided || 
      archerCollision.collided || 
      computerCollision.collided 
      )
    { 
        console.log("Player arrow Collided"); 
    }
  }
}

function handleComputerArrowCollision() 
{
  //Write code to detect collision between computer arrow and opponent
  for(var i = 0; i < computerArrows.length; i++)
  {
    var baseCollision = Matter.SAT.collides(
      computerArrows[i].body,
      playerBase.body
    );

    var archerCollision = Matter.SAT.collides(
      computerArrows[i].body,
      playerArcher.body
    );

    var playerCollision = Matter.SAT.collides(
      computerArrows[i].body,
      player.body
    );

    if(baseCollision.collided || archerCollision.collided|| playerCollision.collided)
    {
      console.log("computer arrow collided");
    }

  }
}