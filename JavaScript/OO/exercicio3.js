class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
        return `O produto ${this.nome} foi vendido.`
    }

    repor() {
        return `O produto ${this.nome} foi reposto com um estoque de ${this.estoque}.`
    }

    alterarPreco() {
        return `O produto ${this.nome} tem o preço de R$${this.preco}.`
    }
}

const produto1 = new Produto("Computador", 4000, 1500)
const produto2 = new Produto("Mouse", 80, 2000)
const produto3 = new Produto("TV", 5000, 100)

console.log(produto1.vender());
console.log(produto1.repor());
console.log(produto1.alterarPreco());

console.log("|-------------------------------------|");
console.log("|-------------------------------------|");

console.log(produto2.vender());
console.log(produto2.repor());
console.log(produto2.alterarPreco());

console.log("|-------------------------------------|");
console.log("|-------------------------------------|");

console.log(produto3.vender());
console.log(produto3.repor());
console.log(produto3.alterarPreco());