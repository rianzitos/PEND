export class Saudacao {

    // MÉTODO QUE DEFINE OS VALORES INICIAIS DO OBJETO
    constructor(nome, idade, curso) {

        //SIGNIFICA "ESTE OBJETO";
        // this.marca: atributo do objeto | marca: valor recebido pelo construtor
        //  "A marca deste carro recebe o valor informado."
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    saudacao() {
        console.log(`Olá! Me chamo ${this.nome}, tenho ${this.idade} anos de idade, e faço o curso de ${this.curso} no SENAI.`);
    }

}