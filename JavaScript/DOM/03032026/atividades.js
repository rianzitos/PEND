//Atividade 1
let botao1 = document.querySelector("#botao1");
let botao2 = document.querySelector("#botao2");
let titulo = document.querySelector("#titulo");

botao1.addEventListener("click", function() {
    titulo.style.color = "blue";
});

botao2.addEventListener("click", function() {
    titulo.style.color = "red";
});

//Atividade 2
let mostrar= document.querySelector("#mostrar");
mostrar.addEventListener("click", function() {
    oculto.classList.toggle("mensagem");
});

//Atividade 3 

let input = document.querySelector("#input");
let contador = document.querySelector("#contador");

input.addEventListener("keyup", function() {
    contador.textContent = input.value.length;
});
//Atividade 4

let cliqBut = document.querySelector("#cliqBut");
let contadorBut = document.querySelector("#contadorBut");

cliqBut.addEventListener("click", function() {
    let contador2 = parseInt(contadorBut.textContent);
    contador2++;
    contadorBut.textContent = contador2;
});

//Atividade 5 e Atividade 6

let inputEle = document.querySelector("#inputEle");
let buttonEle = document.querySelector("#buttonEle");
let lista = document.querySelector("#lista");

buttonEle.addEventListener("click", function() {
    let novoItem = document.createElement("li");
    novoItem.textContent = inputEle.value;
    document.getElementById("lista").appendChild(novoItem);

//Atividade 6 e Desafio Extra
    novoItem.addEventListener("click", function() {
        let confirma = prompt("Deseja mesmo remover item da lista? (S/N)");
        if (confirma === "S" || confirma === "s") {
            lista.removeChild(novoItem);
        } 
        else {
            alert("Item não removido");
        };
});
});

//Desafio HARD!

let inputHard = document.querySelector("#inputHard");
let butHard = document.querySelector("#butHard");
let texto = document.querySelector("#texto");

butHard.addEventListener("click", function() {
    let nome = inputHard.value
    if (nome === "") {
        document.getElementById("texto").innerHTML = "<p id='erro'>Campo nome é obrigatório</p>";
    }

    else if (nome === "Yuri Alberto" || nome === "Garro" || nome === "Memphis") {
        document.getElementById("texto").innerHTML = "<p id='certo'>Nome enviado com sucesso, Vai Corinthians!</p>";
    }
    
    else{
        document.getElementById("texto").innerHTML = "<p id='certo'>Nome enviado com sucesso!</p>";
    }
});