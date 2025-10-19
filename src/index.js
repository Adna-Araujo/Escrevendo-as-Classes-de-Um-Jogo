// Definição da classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque;

    // Verifica o tipo e define a descrição do ataque
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else if (this.tipo === "arqueiro") {
      ataque = "arco";
    } else if (this.tipo === "barbaro") {
      ataque = "machado";
    } else {
      ataque = "ataque desconhecido";
    }

    // Exibe a mensagem no console
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criando alguns heróis
const heroiMago = new Heroi("Merlin", 150, "mago");
const heroiGerreiro = new Heroi("Conan", 30, "guerreiro");
const heroiMonge = new Heroi("Li Mei", 25, "monge");
const heroiNinja = new Heroi("Hattori", 20, "ninja");
const heroiArqueiro = new Heroi("Legolas", 35,"arqueiro");
const heroiBarbaro = new Heroi("Guts", 28, "barbaro");

// Heróis atacando
heroiMago.atacar(); 
heroiGerreiro.atacar(); 
heroiMonge.atacar(); 
heroiNinja.atacar(); 
heroiArqueiro.atacar();
heroiBarbaro.atacar();
