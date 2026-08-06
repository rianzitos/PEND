// Classe
class Carro {
    
    // MÉTODO QUE DEFINE OS VALORES INICIAIS DO OBJETO
    constructor(marca, modelo, ano, cor) {
        
        //SIGNIFICA "ESTE OBJETO";
        // this.marca: atributo do objeto | marca: valor recebido pelo construtor
        //  "A marca deste carro recebe o valor informado."
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
        this.cor = cor;
    }

    ligar() {
        console.log("Carro ligado");
    }

    acelerar() {
        console.log("Acelerando");
    }

    frear() {
        console.log(`${this.marca} ${this.modelo} freiou.`);
    }

    buzinar() {
        console.log(`O carro ${this.marca} ${this.modelo} do ano ${this.ano} e da cor ${this.cor} faz Bip-Bip! Hoje é 3x0`)
    }
}   

//Objeto
const carro1 = new Carro("Volkswagen", "Gol", 2020, "Branco")
console.log("Carro 1: ", carro1);

//Objeto
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

//Objeto
const carro3 = new Carro("Fusca", "do Yuri Alberto", 2023, "Preto");
console.log("Carro 3: ", carro3);

console.log("--------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("--------------------------");

console.log("--------------------------");
console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("--------------------------");

console.log("--------------------------");
console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("--------------------------");

//Método
carro1.ligar();
//Método
carro2.acelerar();
//Método
carro3.frear();

carro1.buzinar();