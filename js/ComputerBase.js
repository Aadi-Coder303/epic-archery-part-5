// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//COMPUTER BASE CLASS

class ComputerBase {

  //Created a static base for computer player using its image and added it to the world
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base2.png");

    World.add(world, this.body);
  }

  //Displaying the computer base
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
