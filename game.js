let ball;

function setup() {
   createCanvas(windowWidth, windowHeight);
   rectMode(CENTER);
   
   ball = new Ball();
}

function draw() {
   background(0);

   ball.display();
   ball.update();
}