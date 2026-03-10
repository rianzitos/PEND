//Desafio 1

let butAdd = document.getElementById("butAdd")
let butDim = document.getElementById("butDim")
let butReset = document.getElementById("butReset")
let contador = document.getElementById("contador")

butAdd.addEventListener("click", function() {
    let contador2 = parseInt(contador.textContent);
    contador2++;
    contador.textContent = contador2;
});

butDim.addEventListener("click", function() {
    let contador2 = parseInt(contador.textContent);
    contador2--;
    contador.textContent = contador2;
});

butReset.addEventListener("click", function() {
    contador.textContent = "0";
});

//Desafio 2

let input = document.querySelector("#input");
let contadorC = document.querySelector("#contadorC");

input.addEventListener("keyup", function() {
    contadorC.textContent = input.value.length;

    if (contadorC.textContent > 100) {
        contadorC.style.color = "red";
    }
    else {
        contadorC.style.color = "black";
    }
});

//Desafio 3

let inputAdd = document.querySelector("#inputAdd");
let adici = document.querySelector("#adici");
let lista = document.querySelector("#lista");

adici.addEventListener("click", function() {
    let novoItem = document.createElement("li");
    let conc = document.createElement("button")
    let Rem = document.createElement("button")
    Rem.textContent = "Remover";
    conc.textContent = "Concluído";
    novoItem.textContent = inputAdd.value;
    lista.appendChild(novoItem);
    novoItem.appendChild(conc);
    novoItem.appendChild(Rem)

    conc.addEventListener("click", function() {
        novoItem.classList.toggle("riscado");
    });

    Rem.addEventListener("click", function() {
        lista.removeChild(novoItem);
    });
});

//Desafio 4
// let butColor = document.querySelector("#butColor");
// let cor = document.querySelector("#cor");

// let opcoes = ['0', '1', '2', '3', '4', '5','6','7','8','9', 'A', 'B', 'C', 'D', 'E', 'F'];

const botao = document.getElementById("botao");
const textoCor = document.getElementById("textoCor");

botao.addEventListener("click", function() {

    const caracteres = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * 16);
        cor += caracteres[indice];
    }

    botao.style.backgroundColor = cor;
    textoCor.textContent = cor;

});
