// CREATED BY THE AADI GOLECHA ON 28TH OF JULY
//COMPUTER QUIVER CLASS
class ComputerQuiver
{
  //created static quiver and Added it to the world
  constructor(x, y, width, height) 
  {
    var options = 
    {
      isStatic: true
    };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
  
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/quiver1.png");
    
    World.add(world, this.body);
  }
    
     
  //display function
  display()
  {
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