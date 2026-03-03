let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let titulo = document.querySelector("#titulo");

botao1.addEventListener("click", function() {
    titulo.stylecolor = "blue"
});

botao2.addEventListener("click", function() {
    titulo.stylecolor = "red"
});