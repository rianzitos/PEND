// Chamando as variáveis com Query Selector
let botao = document.querySelector("#cadastrar"); //Botão de cadastrar
let mensagem = document.querySelector("#mensagem"); //Mensagem dizendo se o cadastro está correto ou incorreto
let nome = document.querySelector("#nome"); 
let email = document.querySelector("#email"); 
let senha = document.querySelector("#senha");
let senhaConfirm = document.querySelector("#senhaConfirm"); //Input da confirmação da senha
let senhaText = document.querySelector("#senhaText"); //Diz se a senha é fraca, aceitável ou forte
let telefone = document.querySelector("#telefone"); 
let endereco = document.querySelector("#endereco");

//Fazendo os Regex dos campos de validação (como cada campo deve ser formado)
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexNome = /^[A-Za-z\s]+$/;
const regexTel = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
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

let compSenha = document.querySelector("#compSenha") //Varíavel do valor do input da confirmação de senha
let obgText = document.querySelector("#obgText"); //Variável destinada ao texto pedindo para verificar os campos obrigatórios
let confirmText = document.querySelector("#confirmText"); //Variável que diz que as senhas não coincidem

//Botão de envio do formulário
botao.addEventListener("click", function () {
    //Se todos os valores dos inputs estiverem corretos
    if (regexEmail.test(email.value) && regexNome.test(nome.value) && senha.value.length >= 6 && regexTel.test(telefone.value) && regexCep.test(endereco.value) &&  senhaConfirm.value === senha.value ){
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        inputs.textContent = ""
        mensagem.textContent = "Usuário cadastrado"
        mensagem.style.color = "green";
    }
    //Caso algum estiver incorreto
    else {
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        mensagem.textContent = "Usuário não cadastrado, preencha os campos corretamente";
        mensagem.style.color = "red";
    }
    //Se valores estiverem vazios
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
    inputTel.placeholder = "Digite um telefone (Use o formato (99)99999-9999) *" 
    inputTel.classList.add("input-telefone");
    //Colocando texto do botão
    botaoRem.textContent = "Remover ❌"

    //Atribuindo o telefone adicionado na lista
    novoTel.appendChild(inputTel);
    novoTel.appendChild(botaoRem);
    listaTel.appendChild(novoTel);

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
    //Se os valores estiverem corretos
    if (regexEmail.test(email.value) && regexNome.test(nome.value) && senha.value.length >= 6 && regexTel.test(telefone.value) && (regexTel.test(inputTel.value)) && regexCep.test(endereco.value) && senhaConfirm.value === senha.value){
        mensagem.textContent = "";
        mensagem.textContent = "Usuário cadastrado"
        mensagem.style.color = "green"
        inputs.textContent = ""
    }
    //Caso algum estiver errado
    else {
        mensagem.textContent = "";
        obgText.textContent = ""
        compSenha.textContent = ""
        mensagem.textContent = "Usuário não cadastrado, preencha os campos corretamente";
        mensagem.style.color = "red";
    }
    //Caso algum esteja vazio
    if (email.value === "" || senha.value === "" || nome.value === "" || senhaConfirm.value === "" || telefone.value === "" || endereco.value === ""){
        obgText.textContent = "Verifique os campos obrigatórios"
        obgText.style.color = "red"
    }
    //Caso as senhas não sejam iguais
    if (senhaConfirm.value != senha.value) {
        compSenha.textContent = "As senhas não coincidem"
        compSenha.style.color = "red"
    }
});
})

let botaoSenha = document.querySelector(".icone") //Variável do ícone para visualizar a senha

//Evento para visualizar a senha digitada
botaoSenha.addEventListener("click", function() { 
    if (senha.type === "password") { //Se for do tipo senha, irá transformar ele para tipo texto
        senha.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill','bi-eye-slash-fill');
    }
    //Caso não seja, irá transformar para o tipo senha 
    else  {
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill','bi-eye-fill');
    }
})