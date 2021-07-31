// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//PLAYER BASE CLASS

class PlayerBase {

  //Created a static base for player to stand
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    //Created the player and added it to the world
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base1.png");

    World.add(world, this.body);
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
