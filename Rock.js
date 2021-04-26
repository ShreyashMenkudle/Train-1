class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.w = width;
      this.h = height;
      this.image=loadImage("images/rock1.png");
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      
    }

    show(){

     imageMode(CENTER); 
     fill('black'); 
     stroke ("grey");
     image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    }

  }
  