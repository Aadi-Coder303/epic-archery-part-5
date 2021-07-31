// CREATED BY THE AADI GOLECHA ON 28TH OF JULY 
//COMPUTER CLASS

class Computer 
{
  //Making the computer is static (still)
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    //Created the comp player using its image and added it to the world
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = loadImage("./assets/heart.png");
    this.life2 = loadImage("./assets/heart.png");
    this.life3 = loadImage("./assets/heart.png");

        World.add(world, this.body);
  }

  life()
  {
    push();
    textSize(20);
    fill("white");
    text("computer", this.body.position.x,40);
 
    //fill(this.life1);
    image(this.life1,this.body.position.x - 70,50,70,60);
 
    //fill(this.life2);
    image(this.life2,this.body.position.x,50,70,60);
 
    //fill(this.life3);
    image(this.life3,this.body.position.x + 70,50,70,60);
 
    pop();
  }
 

  //function to display the player
   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
