
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "launched";

var engine, world ;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//The Bodies Here.

	//Grounds
	 ground1 = new Ground(500,600,1000,20);
	 ground2 = new Ground(700,450,300,10);

	 //Blocks
	 //row1 bottom
	 b1r1 = new Block(810,430,30,30);
	 b2r1 = new Block(780,430,30,30);
	 b3r1 = new Block(750,430,30,30);
	 b4r1 = new Block(720,430,30,30);
   b5r1 = new Block(690,430,30,30);
	 b6r1 = new Block(660,430,30,30);
   b7r1 = new Block(630,430,30,30);
	 b8r1 = new Block(600,430,30,30);
	 
	 //row2
	 b1r2 = new Bl(795,415,30,30);
	 b2r2 = new Bl(765,415,30,30);
   b3r2 = new Bl(735,415,30,30);
	 b4r2 = new Bl(705,415,30,30);
	 b5r2 = new Bl(675,415,30,30);
   b6r2 = new Bl(645,415,30,30);
	 b7r2 = new Bl(615,415,30,30);
	

	 //row3
	 b1r3 = new B(780,400,30,30);
   b2r3 = new B(750,400,30,30);
	 b3r3 = new B(720,400,30,30);
   b4r3 = new B(690,400,30,30);
   b5r3 = new B(660,400,30,30);
	 b6r3 = new B(630,400,30,30);
	//  b7r3 = new B(305,185);

	 //row4
  b1r4 = new Bk(765,385,30,30);
  b2r4 = new Bk(735,385,30,30);
	b3r4 = new Bk(705,385,30,30);
  b4r4 = new Bk(675,385,30,30);
  b5r4 = new Bk(645,385,30,30);
	//  b6r4 = new Bk(312,170);

	//  //row5
	  b1r5 = new Bo(750,370,30,30);
	  b2r5 = new Bo(720,370,30,30);
	  b3r5 = new Bo(690,370,30,30);
	  b4r5 = new Bo(660,370,30,30);
	//  b5r5 = new Bo(320,155);

	 //row6
	  b1r6 = new Block(735,355,30,30);
	  b2r6 = new Block(705,355,30,30);
	  b3r6 = new Block(675,355,30,30);
	//  b4r6 = new Block(327,140);

	 //row7
	 b1r7 = new Bl(720,340,30,30);
	 b2r7 = new Bl(690,340,30,30);
	//  b3r7 = new Bl(335,125);

  //row8
	b1r8 = new B(705,325,30,30);
	//  b2r8 = new B(342,110);
  
  ball = new Ball(200,200,30)

  sling = new Sling(ball.body,{x:200,y:200})
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine);
  //DISPLAYS

  //Ground DISPLAYS
  ground1.display();
  ground2.display();

  //Block DISPLAYS
  //row1 bottom
   b1r1.display();
   b2r1.display();
   b3r1.display();
   b4r1.display();
   b5r1.display();
   b6r1.display();
   b7r1.display();
   b8r1.display(); 

  // //row2
   b1r2.display();
   b2r2.display();
   b3r2.display();
   b4r2.display();
   b5r2.display();
   b6r2.display();
   b7r2.display();

  // //row3
   b1r3.display();
   b2r3.display();
   b3r3.display();
   b4r3.display();
   b5r3.display();
   b6r3.display();
  // b7r3.display();

  // //row4
   b1r4.display();
   b2r4.display();
   b3r4.display();
   b4r4.display();
   b5r4.display();
  // b6r4.display();

  // //row5
   b1r5.display();
   b2r5.display();
   b3r5.display();
   b4r5.display();
  // b5r5.display();

  // //row6
   b1r6.display();
   b2r6.display();
   b3r6.display();
  // b4r6.display();

  //row7
  b1r7.display();
  b2r7.display();
  // b3r7.display();

  // //row8
  b1r8.display();
  // b2r8.display();

  ball.display();

  //slingshot
  sling.display();


drawSprites();
 
}

function mouseReleased(){
  console.log('lolo')
     sling.fly();
     gameState = "launched";
 }

 function mouseDragged(){
   console.log('lol')
 if (gameState == "launched"){
  console.log('yay')
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
 }





