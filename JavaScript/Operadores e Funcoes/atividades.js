//Hora atual

function horaAgora() {
    let date = new Date();

    console.log(date.getHours() +":"+ date.getMinutes() + ":"+ date.getSeconds());
}

horaAgora();

//Soma e Média de dois números

function somaMedia(numer1,numer2) {
    let soma = parseFloat(numer1) + parseFloat(numer2);
    let media = soma / 2;
    console.log("Resultado da soma é: "+soma +" e a média é: "+media);
}

let numer1 = prompt("Digite um número");
let numer2 = prompt("Digite outro número");

somaMedia(numer1, numer2);

//Tamanho de um nome e sua versão maiúscula

function nomeMaiTam(nome) {
    console.log("Tamanho:", nome.length +" letras");
    console.log("Maiúsculo:", nome.toUpperCase());
}

let nome = prompt("Digite um nome: ");

nomeMaiTam(nome);

//Verificar se há a palavra "HTML" em uma frase

function verificar(html) {
    let verifica = html.includes("HTML");
    
    console.log("Sua frase contém 'HTML'? " + verifica)
}
let html = prompt("Digite uma frase:");

verificar(html);