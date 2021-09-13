let img;

var z = 80
var y = 100
var altura = 0
var imagens = [];
var contador = 0;
var tempo = 0;
var xJogador = 5;
var yJogador = 290;
var num0, x0, y0;
var num1, x1, y1;
var num2, x2, y2;
var num3, x3, y3;
var num4, x4, y4;
var num5, x5, y5;
var num6, x6, y6;
var num7, x7, y7;
var num8, x8, y8;
var num9, x9, y9;
var telaAnterior = 1
let music

var hit;

var opcao = 1;
var tela = 0;

function preload() {
  img = loadImage('WhatsApp Image 2021-08-14 at 01.46.52.jpeg')
  img2 = loadImage('Chuva de números.png')
  imagens[0] = loadImage('img/Run__000.png');
  imagens[1] = loadImage('img/Run__001.png');
  imagens[2] = loadImage('img/Run__002.png');
  imagens[3] = loadImage('img/Run__003.png');
  imagens[4] = loadImage('img/Run__004.png');
  imagens[5] = loadImage('img/Run__005.png');
  imagens[6] = loadImage('img/Run__006.png');
  imagens[7] = loadImage('img/Run__007.png');
  imagens[8] = loadImage('img/Run__008.png');
  imagens[9] = loadImage('img/Run__009.png');
  num0 = loadImage('Number0 7x10.png');
  num1 = loadImage('Number1 7x10.png');
  num2 = loadImage('Number2 7x10.png');
  num3 = loadImage('Number3 7x10.png');
  num4 = loadImage('Number4 7x10.png');
  num5 = loadImage('Number5 7x10.png');
  num6 = loadImage('Number6 7x10.png');
  num7 = loadImage('Number7 7x10.png')
  num8 = loadImage('Number8 7x10.png')
  num9 = loadImage('Number9 7x10.png')
  music = loadSound('musica.wav');
  
}

function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}

function setup() {
  x0 = 200;
  y0 = 10;
  x3 = 280;
  y3 = 15;
  x4 = 120;
  y4 = 0;
  x5 = 40;
  y5 = 0;
  x1 = 50;
  y1 = 0;
  x2 = 130;
  y2 = 0;
  x6 = 210;
  y6 = 0;
  x9 = 290;
  y9 = 0;
  x8 = 50;
  y8 = 0;
  x7 = 300;
  y7 = 0;
  
  
  hit = false;
  
  createCanvas(400, 400);
  frameRate(30);
  
}
     
function menu() {
  if(playsound()) {
    music.stop();
    music.play();
    music.setVolume(0.01);
    music.loop();
  }
  background(100, 100, 255);
  image(img2, 0, 0);
  
  rect(z, y, 230, 45)
  
  textSize(30);
  text('JOGAR', 90, 130);
  text('INSTRUÇÕES', 90, 230);
  text('CRÉDITOS', 90, 330);
}

function instrucoes() {
  fill(255, 255, 255);
  background(8, 42, 68);
  fill(255, 255, 255);
  textSize(40)
  text('INSTRUÇÕES:', 10, 50);
  textSize(15)
  text('* ESSE JOGO É INDICADO AOS ALUNOS DO', 10, 100);
  text('3º ANO DO ENSINO FUNDAMENTAL.', 10, 120)
  text('* MATÉRIA: MATEMÁTICA.', 10, 150)
  text('* HABILIDADE: ((EF03MA05) UTILIZAR DIFERENTES', 10, 180)
  text('PROCEDIMENTOS DE CÁLCULO MENTAL E ESCRITO', 10, 200);
  text('PARA RESOLVER PROBLEMAS SIGNIFICATIVOS', 10, 220);
  text('ENVOLVENDO ADIÇÃO E SUBTRAÇÃO COM NÚME-', 10, 240);
  text('ROS NATURAIS.', 10, 260);
  text('* COMO JOGAR: O JOGADOR TERÁ QUE USAR O TE-', 10, 290)
  text('CLADO DO COMPUTADOR PARA FAZER MOVIMEN-', 10, 310)
  text('TOS, INDO ATÉ A RESPOSTA CORRETA DA EQUAÇÃO.', 10, 330)
}

function creditos() {
  fill(255, 255, 255);
  background(8, 42, 68);
  textSize(32)
  text('CRÉDITOS:', 10, 50);
  textSize(20)
  text('EDUCADOR: RAIMARTINS', 10, 100)
  text('ALUNO: ANA LARISSA DA C LIMA', 20, 230)
  text('FUNÇÃO: PROGRAMADOR', 130, 280)
  textSize(13)
  text('ESTUDANTE DO BACHARELADO EM', 130, 310)
  text('CIÊNCIA E TECNOLOGIA NA UFRN', 130, 330)
  image(img, 20, 240)
}

function fase1() {
    if(playsound()) {
    music.stop();
    music.play();
    music.setVolume(0.01);
    music.loop();
  }
 fill(255, 255, 255);
  background(8, 42, 68);
  image(num0, x0, y0, 15, 20);
  image(num4, x4, y4, 15, 20);
  image(num5, x5, y5, 15, 20);
  image(num3, x3, y3, 15, 20);
  
  image(imagens[contador], xJogador, yJogador, 100, 100);
  tempo++;
  if(tempo>5) {
    contador++;
    tempo=1;
  }
  if(contador>9) {
    contador=0;
  }
  textSize(25)
  text('FASE 1', 20, 30);
  text('2 + 2 =', 20, 70)
  
  if(keyIsPressed && keyCode == RIGHT_ARROW && xJogador < 300) {
    xJogador += 5;
}
  if(keyIsPressed && keyCode == LEFT_ARROW && xJogador > 0){
    xJogador -= 5;
  }
  moveNumber();
}

function fase2() {
  
  
 fill(255, 255, 255);
  background(8, 42, 68);
  image(num9, x9, y9, 15, 20);
  image(num2, x2, y2, 15, 20);
  image(num1, x1, y1, 15, 20);
  image(num6, x6, y6, 15, 20);
  image(imagens[contador], xJogador, yJogador, 100, 100);
  tempo++;
  if(tempo>5) {
    contador++;
    tempo=1;
  }
  if(contador>9) {
    contador=0;
  }
  textSize(25)
  text('FASE 2', 20, 30);
  text('5 + 3 - 2 =', 20, 70)
  
  if(keyIsPressed && keyCode == RIGHT_ARROW && xJogador < 300) {
    xJogador += 5;
}
  if(keyIsPressed && keyCode == LEFT_ARROW && xJogador > 0){
    xJogador -= 5;
  }
  moveNumber();
  
   hit = collideRectRect(xJogador, yJogador, 50, 50, x6, y6, 15, 20);
  
  if(hit && tela == 4){
    //x4=-50;
    tela = 5; // fase 3
    x4 = 20;
    y4 = 20;
  } else if (hit && tela == 5){
    tela = 5; // fase 4
    x6 = 20;
    y6 = 20;
}
}

function fase3() {
  fill(255, 255, 255);
  background(8, 42, 68);
  image(num8, x8, y8, 15, 20);
  image(num2, x2, y2, 15, 20);
  image(num7, x7, y7, 15, 20);
  image(num6, x6, y6, 15, 20);
  image(imagens[contador], xJogador, yJogador, 100, 100);
  tempo++;
  if(tempo>5) {
    contador++;
    tempo=1;
  }
  if(contador>9) {
    contador=0;
  }
  textSize(25)
  text('FASE 3', 20, 30);
  text('4 + 3 + 1 =', 20, 70)
  
  if(keyIsPressed && keyCode == RIGHT_ARROW && xJogador < 300) {
    xJogador += 5;
}
  if(keyIsPressed && keyCode == LEFT_ARROW && xJogador > 0){
    xJogador -= 5;
  }
  moveNumber();
}


function keyPressed() {
  if(key=="ArrowUp" && y>130) {
    y=y-100
    opcao=opcao-1;
  console.log(opcao)
  }
  if(key=="ArrowDown" && y<300) {
    y=y+100;
    opcao=opcao+1;
  console.log(opcao)
  }
  
  if(key=="Enter") {
    tela=opcao
  }
  
  if(key=="Escape") {
    tela=0
  }
  hit = collideRectRect(xJogador, yJogador, 50, 50, x8, y8, 15, 20);
  
    if(hit && tela == 5){
    //x4=-50;
    tela = 6; // fim
    x4 = 20;
    y4 = 20;
  } else if (hit && tela == 5){
    tela = 6; // fim
    x8 = 20;
    y8 = 20;
  
}
}

function fim1() {
  fill(255, 255, 255);
  background(8, 42, 68);
  textSize(25);
  text('PARABÉNS VOCÊ CONSEGUIU!', 10, 100);
  textSize(17);
  text('*RESETE O JOGO PARA JOGAR NOVAMENTE*', 10, 300);
  textSize(100);
  text('FIM', 100, 200);
}


function draw() {
    //mover numero
  
  hit = collideRectRect(xJogador, yJogador, 50, 50, x4, y4, 15, 20 );
  
  if(hit && tela == 1){
    //x4=-50;
    tela = 4; // fase 2
    x4 = 20;
    y4 = 20;
  } else if (hit && tela == 4){
    tela = 5; // fase 3
    x4 = 20;
    y4 = 20;
  }
  
   if(tela==0)
    menu();
  if(tela==1) 
    fase1();
  if(tela==2)
    instrucoes()
  if(tela==3)
    creditos()
  if(tela==4)
    fase2();
  if(tela==5)
    fase3();
  if(tela==6)
    fim1();

}

function moveNumber() {
  y0 = y0 + 2;
  y1 = y1 + 2;
  y2 = y2 + 2;
  y3 = y3 + 2;
  y4 = y4 + 2;
  y5 = y5 + 2;
  y6 = y6 + 2;
  y7 = y7 + 2;
  y8 = y8 + 2;
  y9 = y9 + 2;
  
  if(y0> height && tela==1 || y3> height && tela==1 || y4> height && tela==1 || y5> height && tela==1 ){
    y0 = 10;
    y3 = 15;
    y4 = 0;
    y5 = 0;
  }
  else if(y0> height && tela==4 || y3> height && tela==4 || y4> height && tela==4 || y5> height && tela==4){
    y0 = 10;
    y3 = 15;
    y4 = 0;
    y5 = 0;
    y1 = 0;
    y2 = 0;
    y6 = 0;
    y9 = 0;
  }
  else if(y0> height && tela==5 || y3> height && tela==5 || y4> height && tela==5 || y5> height && tela==5){
    y0 = 10;
    y3 = 15;
    y4 = 0;
    y5 = 0;
    y1 = 0;
    y2 = 0;
    y6 = 0;
    y9 = 0;
    y8 = 0;
    y7 = 0;
  }
}