function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("#000000");
    fill("rgb(203,148,253)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  