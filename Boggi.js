class Boggi{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.w = width;
      this.h = height;
      this.image=loadImage("images/coach.png");
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      Matter.Body.setMass(this.body,this.body.mass*5);

      
    }

    show(){

     imageMode(CENTER); 
     image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }

  }
  