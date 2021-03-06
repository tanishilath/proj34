class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,

        'isStatic': false
        // 'isStatic'= false
        // 'isStatic'= true
        // 'isStatic': false
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("m.png");
    World.add(world, this.body);
    //this.image = this.body
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    //strokeWeight(4);
    //stroke("black");
    //fill("red");
    //rect(0, 0, this.width, this.height);
    image(this.image, 0,0,this.width, this.height)
    pop();
  }
}