// Exercícios de interpretação de código

// Exercício 1
/* 
O código está fazendo um loop onde, enquanto a variável "i" for menor que 5, reberá um incremento de +1 e
somará o número atual da variável "i" com o que estiver dentro da variável "valor". No final, imprimirá
a última soma que ficou armazenada na variável "valor", que será o 10.
*/


// Exercício 2
/* 
// A
Serão impressos no console os números acima de 18 (19, 2, 23, 25, 27 e 30).

// B
Não é possível usar o for of para acessar os índices de uma lista porque ele sempre percorrerá todo o array.
A estrutura mais recomendada seria usar somente o for.
*/


// Exercícios de escrita de código

// Exercício 3
//const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// A
/*
for (let numero of array) {
    console.log(numero);
}
*/

// B
/*
for (let numero of array) {
    console.log(numero / 10);
}
*/

// C
/*
const novoArray = [];
for (let i = 0; i < array.length; i++) {
    let valor = array[i];
    if (valor % 2 === 0){
        novoArray.push(valor);
    } 
}

console.log(novoArray);
*/

// D
/*
const arrayStrings = [];

for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    arrayStrings.push(`O elemento do índex ${i} é o: ${numero}.`);
}

console.log(arrayStrings);
*/

// E
/*
let valorMaximo = 0;
let valorMinimo = Infinity;

for (let i = 0; i < array.length; i++) {
    let valorAtual = array[i]
    
    if (valorAtual >= valorMaximo) {
        valorMaximo = valorAtual;

    } else if (valorAtual < valorMinimo) {
        valorMinimo = valorAtual;
    }
}

console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}.`)
*/


// Desafio 1
/* O resultado do console será:
0
00
000
0000
*/


// Desafio 2
/*
const numeroMisterioso = Number(prompt("Digite um número entre 0 e 100:"));

console.log("Vamos jogar!");

let tentativas = 0;
let acertou = false;

while (acertou === false) {
    const numeroJogador = Number(prompt("Tente acertar o número do primeiro jogador!"));
    tentativas++;
    if (numeroJogador !== numeroMisterioso) {
        if (numeroJogador > numeroMisterioso) {
            console.log(`Errou feio... errou rude! O número é menor que ${numeroJogador}`);
        } else {
            console.log(`Errou feio... errou rude! O número é maior que ${numeroJogador}`);
        }
    } else {
        console.log(`Acertou!\n O número de tentativas foi: ${tentativas}`);
        acertou = true;
    }
}
*/


// Desafio 3
/*
console.log("Vamos Jogar!");

let numeroComputador = Math.floor((Math.random() * 100) + 1);
let tentativas = 0;
let acertou = false;

while(acertou === false) {
    const numeroJogador = Number(prompt("Tente acertar o número misterioso!"));
    tentativas++;
    if (numeroJogador !== numeroComputador) {
        if (numeroJogador > numeroComputador) {
            console.log(`Errou feio... errou rude! O número é menor que ${numeroJogador}`);
        } else {
            console.log(`Errou feio... errou rude! O número é maior que ${numeroJogador}`);
        }
    } else {
        console.log(`Acertou!\n Você tentou ${tentativas} vezes.`);
        acertou = true;
    }
}
*/