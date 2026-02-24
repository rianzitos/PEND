//Funções

//Função sem parâmetro

function saudacao() {
    console.log("Olá, JavaScript! Essa é uma função sem parâmetro");
}

saudacao();

function nomeDaFuncao(parametros) {
    return resultado;
}

function somar(a, b) {
    return a + b; 
}

console.log(somar(5, 3) ,"Essa é uma função com retorno.");

function saudacaonome(nome) {
    console.log("Olá, " + nome ,". Essa é uma função sem retorno");
}

saudacaonome("Ana");

//Exercício 7

function IMC(peso, altura){
    return peso/(altura**2);
}

console.log(IMC(65, 1.80));

//Exercício 8

function imparPar(num) {
    if (num % 2 == 0){
        console.log("O número ",+ num , "é par");
    } else {
        console.log("O número ",+ num , "é ímpar");
    }
}

let num = 1910;
imparPar(num);

console.log("******************** FUNÇÕES NATIVAS ********************");

let agora = new Date();
console.log(agora);

    function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Horas:", data.getHours());
    console.log("Minutos:", data.getMinutes());
    console.log("Segundos:", data.getSeconds());
}

mostrarDataHora();

function dataAgora() {
    let date = new Date();

    console.log(date.getHours() +":"+ date.getMinutes() + ":"+ date.getSeconds() +" "+ date.getDate() +"/"+ date.getMonth() +1 +"/"+ date.getFullYear());
}

dataAgora();

console.log("**************** FUNÇÕES MATEMÁTICAS ********************")

console.log("Valor de PI: ", Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("Ao quadrado:", Math.pow(numero, 2));
    console.log("Valor absoluto:", Math.abs(numero));
}

calcularOperacoes(7.8);

console.log("**************** FUNÇÕES DE STRING ******************");

function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");

function verificarNaFrase(frase) {
    console.log(frase.includes("JavaScript"));
}

verificarNaFrase("Eu estudo JavaScript");

function incluirNaFrase(nome, curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}

console.log(incluirNaFrase("José", "Front-End"));