var ship;
var flowers = [];
var drops = [];
var score = 0;
var music;

function preload() {
 music =  loadSound("sounds/Music/Music-01.mp3");
}

function drawScore() {
    textSize(20);  
    fill(57,255,20);
    text("Score " + score,10,30);
  }

function setup() {
  createCanvas(1000,600);
  music.play();
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80+80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  drawScore();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
        flowers[j].grow();
        drops[i].evaporate();
      }
    }
    var temp = 0
    for ( j = 0; j < flowers.length; j++) {
        if(flowers[j].y < 0){
          temp++;
        }
    }
    if(temp == 6){
            textSize(24);
            text("Hey, u made d ballons fly away!!",350,300)
    }
    
  }

  var edge = false;

  for ( i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for ( i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }

  for ( i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }


}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
