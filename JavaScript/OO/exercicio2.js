class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    aprender() {
        return `O aluno ${this.nome} com ${this.idade} anos de idade e de matrícula ${this.matricula} está aprendendo`;
    }

    estudar() {
        return `O aluno ${this.nome} está estudando no curso ${this.curso}`;
    }

    apresentar() {
        return `O aluno ${this.nome} precisa apresentar um trabalho no curso de ${this.curso}`;
    }
}

const aluno1 = new Aluno("Rian", 17, "Desenvolvimento de Sistemas", 4700);

const aluno2 = new Aluno("Romero", 19, "Qualidade", 2015);

const aluno3 = new Aluno("Renato", 21, "Logística", 2013);

console.log(aluno1.aprender());
console.log(aluno1.estudar());
console.log(aluno1.apresentar());

console.log("|-------------------------------------|")
console.log("|-------------------------------------|")

console.log(aluno2.aprender());
console.log(aluno2.estudar());
console.log(aluno2.apresentar());

console.log("|-------------------------------------|")
console.log("|-------------------------------------|")

console.log(aluno3.aprender());
console.log(aluno3.estudar());
console.log(aluno3.apresentar());