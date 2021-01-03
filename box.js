class Block {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.visibility=225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed <3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
  //    rotate(angle);
      rectMode(CENTER);
//strokeWeight(4);
      //stroke("green")
    fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }else{
      World.remove(world,this.body)
      tint(255,this.Visiblity);
      push();
      this.visibility = this.visibility-5
      pop();
    }
  }
    score(){
     // console.log(this.visibility)
      if (this.visibility < 0 && this.visibility > -105){
        score++;
       // console.log(score);
      }
    }

  
}