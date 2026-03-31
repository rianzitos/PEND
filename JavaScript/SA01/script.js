// Chamando as variáveis com Query Selector
let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let senhaConfirm = document.querySelector("#senhaConfirm")
let senhaText = document.querySelector("#senhaText")
let telefone = document.querySelector("#telefone")
let endereco = document.querySelector("#endereco")

//Fazendo os Regex dos campos de validação (como cada campo deve ser formado)
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNome = /^[A-Za-z\s]+$/;
const regexTel = /^\(\d{2}\)\d{5}-\d{4}$/;
const regexCep = /^\d{5}-\d{3}$/;

//Validação da senha (força)
senha.addEventListener("keyup", function() {
    let tamanhoSenha = senha.value.length
    if (tamanhoSenha < 6) {
        senhaText.textContent = "Senha fraca";
        senhaText.style.color = "red";
    }
    else if (tamanhoSenha >=6 && tamanhoSenha < 10) {
        senhaText.textContent = "Senha aceitável";
        senhaText.style.color = "orange";
    }
    else if (tamanhoSenha >= 10) {
        senhaText.textContent = "Senha forte"
        senhaText.style.color = "green";
    }
});

let compSenha = document.querySelector("#compSenha")
let obgText = document.querySelector("#obgText");
let confirmText = document.querySelector("#confirmText");

//Botão de envio do formulário
botao.addEventListener("click", function () {
    if (regexEmail.test(email.value) && regexNome.test(nome.value) && senha.value.length >= 6 && regexTel.test(telefone.value) && regexCep.test(endereco.value) &&  senhaConfirm.value === senha.value ){
        
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        mensagem.textContent = "Usuário cadastrado"
        mensagem.style.color = "green";
    }
    else {
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        mensagem.textContent = "Usuário não cadastrado, preencha os campos corretamente";
        mensagem.style.color = "red";
    }
    if (email.value === "" || senha.value === "" || nome.value === "" || senhaConfirm.value === "" || telefone.value === "" || endereco.value === ""){
        obgText.textContent = "Verifique os campos obrigatórios"
        obgText.style.color = "red"
    }
    if (senhaConfirm.value != senha.value) {
        compSenha.textContent = "As senhas não coincidem"
        compSenha.style.color = "red"
    }
});
//Atribuindo variáveis do telefone
let addTel = document.querySelector("#addTel")
let listaTel = document.querySelector("#listaTel")

//Evento de adicionar telefone com um botão
addTel.addEventListener("click", function() {
    //Atribuindo variáveis relacionadas
    let novoTel = document.createElement("li"); //Item da lista criado pelo botão
    let inputTel = document.createElement("input") //Input do telefone atribuido na lista
    let botaoRem = document.createElement("button") //Botão de remover telefone

    //Colocando os valores do input
    inputTel.type = "text"
    inputTel.placeholder = "Digite um telefone" 
    inputTel.title = "Use o formato: (99)99999-9999"

    //Colocando texto do botão
    botaoRem.textContent = "Remover ❌"

    //Atribuindo o telefone adicionado na lista
    novoTel.appendChild(inputTel);
    listaTel.append(novoTel);
    novoTel.append(botaoRem)    

    //Evento de remover o telefone adicionado com um botão
    botaoRem.addEventListener("click", function() {
    //Confirmação de remoção do telefone
    let confirma = confirm("Deseja mesmo remover item da lista? ");
        if (confirma === true) {
            listaTel.removeChild(novoTel)
        }
        else if (confirma === false) {
            alert("Telefone não removido")
        }
    })

    //Evento de envio do formulário COM O(S) TELEFONES ADICIONADO(S)
    botao.addEventListener("click", function () {
    if (regexEmail.test(email.value) && regexNome.test(nome.value) && senha.value.length >= 6 && regexTel.test(telefone.value) && (regexTel.test(inputTel.value)) && regexCep.test(endereco.value) && senhaConfirm.value === senha.value){
        mensagem.textContent = "";
        mensagem.textContent = "Usuário cadastrado"
        mensagem.style.color = "green"
    }
    else {
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        mensagem.textContent = "Usuário não cadastrado, preencha os campos corretamente";
        mensagem.style.color = "red";
    }
    if (email.value === "" || senha.value === "" || nome.value === "" || senhaConfirm.value === "" || telefone.value === "" || endereco.value === ""){
        obgText.textContent = "Verifique os campos obrigatórios"
        obgText.style.color = "red"
    }
    if (senhaConfirm.value != senha.value) {
        compSenha.textContent = "As senhas não coincidem"
        compSenha.style.color = "red"
    }
});
})


