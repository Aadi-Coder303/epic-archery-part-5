// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//COMPUTER ARCHER

class ComputerArcher {

  //making a static (still) bow using the image of archer and added it in the world
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.collapse = false;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    }
  
    //display function to show it in the screen
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
  