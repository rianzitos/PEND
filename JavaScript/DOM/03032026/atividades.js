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
    lista.appendChild(novoItem);

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
    if (nome.trim() === "") {
        document.getElementById("texto").innerHTML = "<p id='erro'>Campo nome é obrigatório</p>";
    }

    else{
        document.getElementById("texto").innerHTML = "<p id='certo'>Nome enviado com sucesso!</p>";
    }
});


//Exercícios - Validação de email

//Validação simples de email

let email = document.querySelector("#email");
let validar = document.querySelector("#validar");
let mensagemSuc = document.querySelector("#mensagemSuc")
let mensagemErro = document.querySelector("#mensagemErro")



//Verificação simples de força de senha

let senha = document.querySelector("#senha");
let verifiSenha = document.querySelector("#verifiSenha");

senha.addEventListener("keyup", function() {
    let contadorSenha = senha.value.length

    if (contadorSenha < 6) {
        document.getElementById("verifiSenha").innerHTML = "<p id='erro'>Senha fraca</p>";
    } 
    else if (contadorSenha >= 6 && contadorSenha < 10) {
        document.getElementById("verifiSenha").innerHTML = "<p id='meh'>Senha aceitável</p>";
    }
    else {
        document.getElementById("verifiSenha").innerHTML = "<p id='certo'>Senha forte</p>";
    }
})

validar.addEventListener("click", function() {
    let mensE = document.getElementById("menEmail");
    let nomeEmail = email.value;
    if (nomeEmail.includes("@") && nomeEmail.includes(".") && senha.value.length >= 6) {
        mensE.textContent = "";
        menSenha.textContent = "";
        mensagemErro.textContent = "";  
        document.getElementById("mensagemSuc").innerHTML = "<p id='certo'>Email e senha validados!</p>";
    } 
    else if (nomeEmail === "") {
       mensE.innerHTML = "<p id='erro'>Preencha o campo email (Exemplo: nome@gmail.com)</p>";
       mensagemErro.textContent = "";
       mensagemSuc.textContent = "";
       menSenha.textContent = "";
    }    
    else if (senha.value.length === 0) {
        mensE.textContent = "";
        menSenha = document.getElementById("menSenha");
        menSenha.innerHTML = "<p id='erro'>Preencha o campo senha</p>";
    }
    
    else {
        mensE.textContent = "";
        menSenha.textContent = "";
        mensagemSuc.textContent = ""
        document.getElementById("mensagemErro").innerHTML = "<p id='erro'>Email ou senha inválidos, verifique</p>";
    }
})