class Red{
    constructor(x,y,width,height){
        var red_options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,red_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        fill(255);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

};