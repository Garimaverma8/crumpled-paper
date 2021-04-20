class Paper{
     constructor(x,y){
      
        var options= {
          isStatic : false,
        'restitution' : 0.3,
        'friction' : 0,
        'density' : 1.2
        };
        this.body = Bodies.circle(x,y,15,options);
        this.r = 50;
        this.image = loadImage("image/paper.png");
        World.add(world,this.body)

     };

  display(){
    var pos = this.body.position
   
    push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
    

    
    
  }
  

}