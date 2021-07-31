// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//PLAYER CLASS

class Player {

  //Created a static (still) player and added to the world
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player1.png");

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
   text("player", 280,40);

   //fill(this.life1);
   image(this.life1,180,50,70,60);

   //fill(this.life2);
   image(this.life1,250,50,70,60);

   //fill(this.life3);
   image(this.life1,320,50,70,60);

   pop();
 }



  //Displaying the player using its image
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
