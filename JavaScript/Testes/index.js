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
    novoItem.textContent = inputAdd.value;
    lista.appendChild(novoItem);
    novoItem.appendChild(conc);

    conc.addEventListener("click", function() {
        novoItem.classList.toggle("riscado");
    });
});