let x = 0, y = 0; // initialize value for x and y
let xA = x + 100, yA = y + 50; // initialize origin position for bookA
let xB = x + 150, yB = y + 120; // initialize origin position for bookB
let floorY;
let bookHeight = 60;
let r, g, b; // for red, green, and blue color values
let velocityA = 0; // velocity for bookA
let gravity = 0.2; // gravity for bookA
let buttonA;
let buttonB;
let buttonC
let dropA = false;

function setup() {
  createCanvas(windowWidth, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  buttonA = createButton('💚 Unorganized'); // buttonA
  buttonA.class('btn');
  buttonA.mousePressed(Unorganized);
  buttonB = createButton('💖 Color'); // buttonB
  buttonB.class('btn');
  buttonB.mousePressed(Color);
  buttonC = createButton('💙 Organized'); // buttonB
  buttonC.class('btn');
  buttonC.mousePressed(Organized)
  floorY = height - 20;
}

function draw() {
  background(270); //
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  rect(10, 200, 300, 5); //draws shelf
  rect (40,100,30,100)
  rect(200,110,30,90)
  rect(250,50,20,150)
  
  if (dropA) {
    // Apply gravity to bookA
    velocityA += gravity;
    yA += velocityA;

    // Check if bookA hits the floor
    if (yA >= floorY - bookHeight) {
      yA = floorY - bookHeight;
      velocityA *= -0.9; // Apply bounce factor
    }
  }
  
  bookA(); // draws bookA
  bookB(); // draws bookB
}

// Each book is a function.

function bookA() {
  fill(r, g, b);
  rect(xA, yA, 30, 150);
}

function bookB() {
  fill(r, g, b);
  rect(xB, yB, 40, 80);
}

// Function to drop bookA
function Unorganized() {
  dropA = true;
  yA = y + 150; // Reset y position
  velocityA = 0; // Reset velocity
}

// When the user clicks the mouse
function Color() {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
}
// Reset book Position
function organized() {
  dropA = false; // Stop dropping Book A
  yA = y + 50; // Reset Book A y position
  velocityA = 0; // Reset Book A velocity
}

