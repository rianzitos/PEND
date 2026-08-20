class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoDesconto = this.preco - (this.preco * this.desconto / 100);

        return precoDesconto;
    }

    exibir() {

        resultado.innerHTML = `
            <div>            
                <p>${this.nome}</p>
                <p>Preço: R$${this.aplicarDesconto()}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
            </div>
        `
    }
}

const resultado = document.querySelector("#resultado");
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {


    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    localStorage.setItem("produto", JSON.stringify(produto));

    produto.exibir();
})

const dados = localStorage.getItem("produto");

if (dados) {

    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto,
    );

    produto.exibir();
}