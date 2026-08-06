// Objeto: Funcionario
// Atributos: Nome, Idade, Cargo, Formação, CPF, Carga horaria, Salário 
// Métodos: Trabalhar, Entregrar tarefa, Receber Salário, Aposentar

class Funcionario {
    // Atributos
    constructor(nome, idade, cargo, formacao, cpf, horario, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.formacao = formacao;
        this.cpf = cpf;
        this.horario = horario;
        this.salario = salario;
    }

    // Métodos

    trabalhar() {
        return `O funcionário ${this.nome} com o CPF de ${this.cpf} e a formação de ${this.formacao} trabalhará hoje durante ${this.horario}.`;
    }

    entregarTarega() {
        return `O funcionário ${this.nome} entregou a tarefa.`;
    }
    receberSalario() {
        return `O funcionário ${this.nome} recebeu o salário na quantia de R$${this.salario}.`;
    }
    aposentar() {
        return `O funcionário ${this.nome} está aposentado com ${this.idade} anos de idade e no cargo de ${this.cargo} com um salário de R$${this.salario}.`;
    }
}

// Objeto
const funcionario1 = new Funcionario("Rian", 23, "Desenvolvedor", "Ensino Superior Completo", "449.931.648-07", "8 horas", 4500)
const funcionario2= new Funcionario("Guilherme Scarparo", 24, "Desenvolvedor", "Ensino Superior Completo", "492.267.448-90", "8 horas", 4500);
const funcionario3 = new Funcionario("Renato", 38, "Professor", "Pedagogia", "287.182.765-08", "9 horas", 2000);
const funcionarioEspecial = new Funcionario("Peter Parker", 21, "Homem-Aranha", "Ensino Médio Completo", "200.220.122-017", "16 horas", 0);


console.log(funcionario1.trabalhar());
console.log(funcionario1.entregarTarega());
console.log(funcionario1.receberSalario());
console.log(funcionario1.aposentar());

console.log("|--------------------------------------------|")
console.log("|--------------------------------------------|")

console.log(funcionario2.trabalhar());
console.log(funcionario2.entregarTarega());
console.log(funcionario2.receberSalario());
console.log(funcionario2.aposentar());2

console.log("|--------------------------------------------|")
console.log("|--------------------------------------------|")

console.log(funcionario3.trabalhar());
console.log(funcionario3.entregarTarega());
console.log(funcionario3.receberSalario());
console.log(funcionario3.aposentar());

console.log("|--------------------------------------------|")
console.log("|--------------------------------------------|")

console.log(funcionarioEspecial.trabalhar());
console.log(funcionarioEspecial.entregarTarega());
console.log(funcionarioEspecial.receberSalario());
