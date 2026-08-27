const troncos = document.querySelectorAll(".tronco");
const ponte = document.querySelector(".containerTroncos");
const agua = document.querySelector(".containerAgua");
const pessoa = document.querySelector(".pessoa");
const pessoaFeliz = document.querySelector(".pessoaFeliz");
const mensagemFeliz = document.querySelector("#mensagemVitoria");
const mensagemTriste = document.querySelector("#mensagemTriste");

troncos.forEach(function (tronco) {

    tronco.addEventListener("dragstart", function (event) {

        event.dataTransfer.setData("text", "");

        event.target.classList.add("arrastando");

    });

    tronco.addEventListener("dragend", function (event) {

        event.target.classList.remove("arrastando");

    });

});

ponte.addEventListener("dragover", function (event) {

    event.preventDefault();

    console.log("Pode soltar aqui na ponte...");

});

ponte.addEventListener("drop", function (event) {

    event.preventDefault();

    const tronco = document.querySelector(".arrastando");

    ponte.appendChild(tronco);

    const troncosNaPonte = ponte.querySelectorAll(".tronco");

    if (troncosNaPonte.length === 10) {



        pessoa.style.display = "none";
        pessoaFeliz.style.display = "block";
        mensagemFeliz.style.display = "block";

    }

});

pessoa.addEventListener("dragstart", function (event) {

    event.dataTransfer.setData("text", "pessoa");

});

agua.addEventListener("dragover", function (event) {

    event.preventDefault();

});

agua.addEventListener("drop", function (event) {

    event.preventDefault();

    const tipo = event.dataTransfer.getData("text");

    if (tipo === "pessoa") {

        pessoa.style.display = "none";
        mensagemTriste.style.display = "block";

    }

});