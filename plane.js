class Plane
{
    constructor(x,y,width,height)
    {

        this.body = Bodies.rectangle(x, y, width, height,{isStatic:true});
        this.width = width;
        this.height = height;
        this.image = loadImage("bluePlane.png");
        World.add(world, this.body);
      }
      display(){

         //var pos=this.body.position
        //imageMode(CENTER);
        //image(this.image, pos.x,pos.y,this.width, this.height);
        
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill("white")
        rect(pos.x,pos.y,20,20)
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, 200,140);

     /*if(keyDown(RIGHT_ARROW))
    {
    Matter.Body.setPosition(body,{x:pos.x+5,y:pos.y+0})
    }
    console.log(p.position.x)*/

    }

    
    

 

}