class Heroi {
  constructor (nome, nivel, tipo){
    this.nome = nome;
    this.nivel = nivel;
    this.tipo = tipo;
  }
  attack(){
    let attack;
    switch (this.tipo){
      case 'mago':
        attack = 'magia';
        break;
      case 'guerreiro':
        attack = 'espada';
        break;
      case 'monge':
        attack = 'artes marciais';
        break;
      case 'ninja':
        attack = 'shuriken';
        break;
    }
    console.log(`O heroi ${this.nome} da classe ${this.tipo} e nível ${this.nivel} atacou usando ${attack}`);
  }
}
const heroi = new Heroi('Painkiller', 150, 'guerreiro');
heroi.attack();
