;function setup() {
    createCanvas(400, 400)
    background("#673AB7");
  }
  
  function draw() {
    
    
    fill("rgb(255,0,211)")
    
   //console.log (mouseIsPressed)
    
    if(mouseIsPressed) {
  rect(mouseX, mouseY ,20, 20);
    
  }
    
  }