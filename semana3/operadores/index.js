// *Exercícios de interpretação*

// Exercício 1

/*
a. false;
b. false;
c. true;
d. boolean; */


// Exercício 2

/*
a. undefined;
b. null;
c. 11;
d. 3;
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];
f. 9; */


// *Exercícios de escrita de código*

// Exercício 1

/*
const idade = prompt("Qual a sua idade?");
const idadeAmigo = prompt("Qual a idade de sua(eu) melhor amiga(o)");

const maiorIdade = Number(idade) > Number(idadeAmigo);
const diferencaDeIdade = Number(idade) - Number(idadeAmigo);

console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade);
console.log(diferencaDeIdade); */


//Exercício 2

/*
const numeroPar = prompt("Digite um número par:");

console.log(Number(numeroPar) % 2); */

// Por estar calculando a divisão somente de números pares por 2, o resto sempre será 0.
// Se o usuário insere um número impar, o resto da divisão sempre será 1.


// Exercício 3

/*
const listaDeTarefas = [];
const tarefa1 = prompt("Digite a primeira tarefa que você precisa realizar hoje:");
const tarefa2 = prompt("Digite a segunda tarefa que você precise realizar hoje:");
const tarefa3 = prompt("Digite a terceira que você precise realizar hoje:");

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

console.log(listaDeTarefas);

const indice = prompt("Digite o índice de uma tarefa já realizada (0, 1 ou 2):");

listaDeTarefas.splice(indice, 1);

console.log(listaDeTarefas); */


// Exercício 4

/*
const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu e-mail?");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + 
            nomeDoUsuario + "."); */


// *Desafios*

// Desafio 1

/*
// a //

const Kelvin = (77 - 32) * 5 / 9 + 273.15;

console.log("77°F equivalem a " + Kelvin + "K"); */

// b //

/*
const Fahrenheit = 80 * 9 / 5 + 32;

console.log("80°C equivalem a " + Fahrenheit + "°F"); */

// c //

/*
let Fahrenheit = 30 * 9 / 5 + 32;
let Kelvin = (Fahrenheit - 32) * 5 / 9 + 273.15;
console.log("30°C equivalem a " + Fahrenheit + "°F ou " + Kelvin + "K"); */

// d //

/*
const usuarioCelsius = prompt("Digite um valor para graus Celsius:");
Fahrenheit = usuarioCelsius * 9 / 5 + 32;
Kelvin = (Fahrenheit - 32) * 5 / 9 + 273.15;

console.log(usuarioCelsius + "°C equivalem a " + Fahrenheit + "°F ou " + Kelvin + "K"); */


// Desafio 2

/*
const valorQuilowattPorHora = 0.05;
const consumo = 280;
const despesa = consumo * valorQuilowattPorHora;
const despesaComDesconto = despesa * 15 / 100;

console.log(despesa);
console.log(despesaComDesconto); */


// Desafio 3

// a //

/*
const libra = 20;
const conversaoKilograma = libra/2.205;

console.log(conversaoKilograma); */

// b //

/*
const oz = 10.5;
const conversaoKilograma = oz/35.274;

console.log(conversaoKilograma); */

// c //

/*
const milhas = 100;
const conversaoMetros = milhas / 0.00062137;

console.log(conversaoMetros); */

// d //

/*
const pes = 50;
const conversaoMetros = pes / 3.2808;

console.log(conversaoMetros); */

// e //

/*
const gal = 103.56;
const conversaoLitros = gal / 0.26417;

console.log(conversaoLitros); */

// f //

/*
const xicaras = 450;
const conversaoLitros = xicaras / 4.2268;

console.log(conversaoLitros); */

// g //

/*
const milhas = prompt("Digite a quantidade de milhas:");
const conversaoMetros = milhas / 0.00062137;

console.log (milhas + " milhas equivalem a " + conversaoMetros + " metros."); */


