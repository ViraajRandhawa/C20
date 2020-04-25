
var r = 50; 
var g = 150; 
var b = 250; 
function setup() { 
  createCanvas(400, 600); 
} 
function draw() { 
  r= map(mouseX,0,400,0,50); 
  g = map(mouseX,150,0,0,400); 
  b = map(mouseX,0,400,0,250); 
  background(r,g,b); 
  ellipse(mouseX,200,64,64); 
}