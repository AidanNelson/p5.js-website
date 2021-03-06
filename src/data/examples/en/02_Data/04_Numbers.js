/*
 * @name Numbers
 * @frame 720,400
 * @description Numbers can be written with or without decimals. An integer
 * (more commonly called an int) is a number without a decimal point. A float
 * is a floating-point number, which means it is a number that has a decimal
 * place.
 */
var a = 0;  // Create a global variable "a" of type Number
var b = 0;  // Create a global variable "b" of type Number

function setup() {
  createCanvas(720, 400);
  stroke(255);
}

function draw() {
  background(0);

  a = a + 1;  // Increment a with an integer
  b = b + 0.2;  //Increment b with a float
  line(a, 0, a, height/2);
  line(b, height/2, b, height);

  if(a > width) {
    a = 0;
  }
  if(b > width) {
    b = 0;
  }
}
