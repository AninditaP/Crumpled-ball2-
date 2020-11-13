class Ball{

    constructor(x,y,r){

        var options={

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r/2,options);
        World.add(world,this.body);

        this.image= loadImage("paper.png");


    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y-5);
        ellipseMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,70,70);

        pop()
    }







}
