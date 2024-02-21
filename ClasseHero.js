class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'a espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'a shuriken';
                break;
            default:
                ataque = 'usou suas habilidades';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const meuHeroi = new Heroi('Frodo', 35, 'guerreiro');
meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada

const meuHeroi2 = new Heroi('liu kang', 35, 'ninja');
meuHeroi2.atacar(); // Saída: O ninja atacou usando suas habilidades

const meuHeroi3 = new Heroi('gugu', 35, 'mago');
meuHeroi3.atacar(); // Saída: O mago atacou usando magia