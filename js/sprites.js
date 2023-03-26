// Criando um constructor para requisitar informações do player
class Sprite {
  constructor({ position, dimensions }) {
    this.position = position;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  // Desenhando o Player na tela
  draw() {
    ctx.fillStyle = "white"; // Cor do Pesonagem
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

// Criando o player, com posição e dimensão
const player = new Sprite({
  position: {
    x: 100,
    y: 100
  },
  dimensions: {
    width: 50,
    height: 150
  }
})