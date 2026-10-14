function setup() {
  createCanvas(917,899);

  //Velocidade
  frameRate(5);
}

function draw() {
  //Fundo
  background(225, 229, 223);

  stroke(20);
  strokeWeight(10);
  
  //Linhas horizontais
  line(0, 368, 917, 368);
  line(0, 586, 917, 586);

  //Linhas verticais
  line(422, 0, 422, 899);
  line(93, 586, 93, 899);
  line(706, 586, 706, 899);

  //Vermelho
  fill(231, 6, 4);
  rect(0 + random(-5, 5), 0 + random(-5, 5), 422, 368);

  //Amarelo
  fill(250, 209, 3);
  rect(0 + random(-5, 5), 586 + random(-5, 5), 93, 313);

  //Azul
  fill(23, 23, 101);
  rect(422 + random(-5, 5), 586 + random(-5, 5), 284, 250);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
