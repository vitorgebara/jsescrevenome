function setup() {
    createCanvas(500, 600);
  background("white");
  }
  
  function draw() {
  stroke("blue")
  fill("red")
  
    if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
    } 
      
  }    
      