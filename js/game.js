const canvas = document.querySelector("canvas"); //Request da Tag Canvas
const ctx = canvas.getContext("2d"); // Criando o Contexto para trabalhar com o 2D

// Criando a constante para altura e largura
const canvasWidth = 1024; 
const canvasHeight = 576;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let prevTime = 0;

animate();

// Criando uma função pra sempre estar animando o canvas conforme o FPS do PC
function animate() {
  window.requestAnimationFrame(animate);
  // Alterando o fundo do Game
  ctx.fillStyle = "black";
  // Usando a propriedade para preencher a tela partindo do ponto 0,0
  ctx.fillRect(0,0, canvasWidth, canvasHeight);

  player.draw(); // Exibindo o player na tela

  // Exibir o FPS nos logs do console
  let delta = (performance.now() - prevTime) / 1000;
  let fps = 1 / delta;

  prevTime = performance.now();
  //console.log(`FPS: ${fps}`);

}