 class Particula {
    constructor(x,y,r){

        this.x=x;
        this.y=y;
        this.r=r;

      //  this.color = color(random(0,255), random(0,255),random(0,255))
        this.body = Bodies.circle(this.x,this.y,this.r/2)
        World.add(world.this.Body);


    }
    display(){

        rectMode(CENTER)



    }

 }