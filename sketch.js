var img;

function preload() {
  img = loadImage("assets/p5jsbg.png");
}

function setup() {
  createCanvas(540, 675, WEBGL);
}

function draw() {
  // Draw the background image
  if (img) {
    push();
    translate(-width / 2, -height / 2); // Move the origin to the top-left corner
    image(img, 0, 0, width, height); // Draw the image covering the entire canvas
    pop();
  }

  // Draw the 3D scene
  push();
  translate(0, 0, 200); // Move the 3D scene back to avoid clipping with the background
  rotateY(radians(frameCount) * 0.5);
  rotateX(radians(frameCount) * 0.5);
  noFill();
  stroke(0);
  strokeWeight(1.5);

  let detail = int(mouseX / 40);
  sphere(185, detail, detail);

  pop();
}
