
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var bin1,bin2,bin3;
var ball,image;
var bin_image;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	binImage=loadImage("dustbingreen.png")

	bin1= new BIN(1100,660,200,20);
	bin2= new BIN(1200,550,20,400);
	bin3= new BIN(1000,550,20,400);
	//image= new Img(1100,660.200,20)

	
	var options={
		isStatic:true
	}
	ground= Bodies.rectangle(width/2,680,width,20,options);
	World.add(world,ground);
	
	ball= new Ball(200,100,110);
	Engine.run(engine);
	
}


function draw() {
  background(255);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,1600,20);

 
	//bin1.display();
  // bin2.display();
//	bin3.display();
	ball.display();
	//image.display();
    image(binImage,950,350,0,0);

	fill("grey");
	
}

function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:700,y:-700});

	}



}



