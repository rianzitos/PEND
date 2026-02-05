console.log("Olá, JavaScript!");

//Operadores Aritméticos

let a = 10;
let b = 3;

console.log("Valor de a = 10");
console.log("Valor de b = 3");
console.log("Adição (+): ",a + b);
console.log("Subtração (-): ",a - b);
console.log("Multiplicação (*): ",a * b);
console.log("Divisão (/): ",a / b);
console.log("Resto da Divisão (%): ",a % b);
console.log("Exponenciação (**): ",a ** b);

let contador = 5;
let contador2 = 5;
contador++;
contador2--;
console.log("Incremento (++): ",contador);
console.log("Decremento (--): ",contador2)

//Média de 3 números

let num1 = 10;
let num2 = 7;
let num3 = 5;

console.log("Média de 10, 7 e 5: ",(num1 + num2 + num3) / 3);

//Resto da Divisão

let a1 = 19;
let a2 = 8;

console.log("Resto da divisão entre 19 e 8: ",a1 % a2);

//Operadores Relacionais

let x = 10;
let y = "10";

console.log("Valor de x: 10")
console.log("Valor de y: '10'")
console.log("x == y: ",x == y);
console.log("x === y: ",x === y);
console.log("x != y: ",x != y);
console.log("x !== y: ",x !== y);

//Exercício 3

let idade = 19

if (idade >= 18){
console.log("Você é maior de idade.");
}
else {
    console.log("Você é menor de idade")
}

//Exercício 4

let nume1= 25
let nume2 = 20

if (nume1 > nume2) {
    console.log("o maior número é ",nume1 ,"e o menor número é ",nume2);
}else if (nume2 > nume1) {
    console.log("o maior número é ",nume2 ,"e o menor número é ",nume1);
}
else{
   console.log("Ambos números são iguais.",nume1,"e",nume2);
}

console.log("Operadores Lógicos");


let temCarteira = true;

console.log(idade >= 18  && temCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); // true

//Exercício 5

nota = 6;
frequencia = 77;

if (nota >= 7 && frequencia >= 75) {
    console.log("Você foi aprovado com ",nota," de nota e ",frequencia,"% de frequência.");
} else if (nota >=7 && frequencia < 75) {
    console.log ("Você foi reprovado com ",nota," de nota e ",frequencia,"% de frequência");
} else {
    console.log ("Você foi reprovado com ",nota," de nota e ",frequencia,"% de frequência");
}

//Exercício 6

login = "rian";
token = "1910";

if (login === "rian" || senha === "1910") {
    console.log("Usuário logado!");
}
 else {
    console.log("Login ou token incorretos.")
}
