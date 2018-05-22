/*
 * @name Materials
 * @description There are five types of materials supported.
 * They respond to light differently.
 * Move your mouse to change the light position.
 */
var img;
function setup(){
  createCanvas(710, 400, WEBGL);
  img = loadImage("assets/cat.jpg");
}

function draw(){
  background(0);

  var locX = mouseX - height/2;
  var locY = mouseY - width/2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  texture(img);
  box(80);
  pop();

  push();
  translate(-width/4, -height/4, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  fill(250, 0, 0);
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(width/4, -height/4, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  normalMaterial();
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(-width/4, height/4, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  ambientMaterial(250);
  torus(80, 20, 64, 64);
  pop();

  push();
  translate(width/4, height/4, 0);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  specularMaterial(250);
  torus(80, 20, 64, 64);
  pop();
}
