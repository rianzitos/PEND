let botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    alert("Olá, DOM!");
    let titulo = document.querySelector("#titulo");
    titulo.textContent = "Texto alterado pelo JavaScript";

    titulo.style.color = "blue";
    titulo.style.fontSize = "32px";
});

document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM!</p>";