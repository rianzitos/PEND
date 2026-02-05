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

let num = prompt("Digite um número: ");
imparPar(num);

