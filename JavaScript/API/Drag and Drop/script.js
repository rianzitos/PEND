const produto = document.querySelector("#produto");
const carrinho = document.querySelector("#carrinho");
const produtos = document.querySelector("#produtos");

//event = objeto fornecido pelo nabegador que tem informação sobre eo objeto que aconteceu
//dataTransfer = objeto que armazena o transportar dados durante a operação do arrastar e soltar

produto.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

//mudar o padrão
carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui no carrinho...");
});

//soltar
carrinho.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    //A div de produto passa a ser filho da div carrinho
    carrinho.appendChild(elemento);
})

// ========================================================== //

produtos.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui em produto...");
});

//soltar
produtos.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    //A div de produto passa a ser filho da div carrinho
    produtos.appendChild(elemento);
});