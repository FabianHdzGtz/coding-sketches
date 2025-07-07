var canvas;
var sw;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1')
  sw=1
  //background(color(255,255,255));

  
}

function draw() {
 //background(100)
  line(mouseX, mouseY, pmouseX, pmouseY);
  
    
    
  
}

function mouseReleased() {
    //random(0, 255),random(0, 255),random(0, 255)
    stroke(color(0,0,0));
    sw=sw*1.7

    strokeWeight(sw);

}

