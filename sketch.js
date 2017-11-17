function draw() {
  background(0);
  fill(250);

  var x = 50;
  var count = 0;

  while (count < 3) {
    ellipse(x, height/2, 40, 40);
    count += 1;
    x += 50;
  }
}