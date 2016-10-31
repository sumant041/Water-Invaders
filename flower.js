function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.xdir = 1;
  this.wasHit= false;
   this.grow = function() {
    this.r = this.r + 2;
    this.wasHit = true;
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    console.log(this.r)
    //this.y += (30/(this.r-29));
  }

  this.move = function() {
    this.x = this.x + this.xdir;
    this.y += (1/(this.r-29));
    this.y -= (((this.r * this.r-900))/1000);
    
    if(this.y >= 600){
      console.log("Game over");
      textSize(24);
            text("Oops! Game Over",390,300)
      
    }

  }

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
