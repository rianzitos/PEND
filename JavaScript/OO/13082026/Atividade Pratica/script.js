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


}

class Estoque {

    constructor() {
        this.produtos = [];
        this.recuperarLocal();
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.adicionarLocal();
    }

    exibir() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div>            
                    <p>${produto.nome}</p>
                    <p>Preço: R$ ${produto.aplicarDesconto()}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>
                    <button onclick="estoque.excluirProduto(${indice})">
                        ❌ Excluir
                    </button>
                </div>
            `;
        });
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.adicionarLocal();
        this.exibir();
    }

    adicionarLocal() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }

    recuperarLocal() {
        const dados = localStorage.getItem("produtos");

        if (dados) {

            const produtoSalvo = JSON.parse(dados);

            this.produtos = produtoSalvo.map(produto => {
                return new Produto(
                    produto.nome,
                    produto.preco,
                    produto.categoria,
                    produto.desconto
                );
            });
        }
    }
}


const estoque = new Estoque();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);



    estoque.adicionarProduto(produto);
    console.log(estoque.produtos)
    estoque.exibir();
});

estoque.exibir();




