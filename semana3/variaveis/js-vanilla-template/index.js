// Exercícios de interpretação de código //

/* Exercício 1
    O primeiro console.log vai imprimir o valor 10.
    O segundo console.log vai imprimir os valores 10 e 5, separados por espaço. */

/* Exercício 2
    Será impresso os valores 10 ,10, 10. */



// Exercícios de escrita de código //

// Exercício 1 //

let nome;
let idade;

console.log(typeof nome, typeof idade);

/* O tipo undefined foi impresso porque não foi definido valores para as variáveis nome e idade.
   Quando não definimos um valor, por padrão ele imprime como undefined */

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade);

/* Mostrou que os tipos das variáveis declaradas são string, provavelmente por armazenarem,
    mesmo que dentro do prompt, uma mensagem entre aspas; */

console.log("Olá", nome, ",você tem", idade, "anos." );



 // Exercício 2 //

let fruta = prompt("Qual a fruta que você mais come?");
let musica = prompt("Qual a sua música favorita?");
let jogo = prompt("Qual o jogo que você mais gosta?");
let livro = prompt("Qual seu livro predileto?");
let animal = prompt("Qual seu animal favorito?");
console.log ("1. Qual a fruta que você mais come?", "Resposta:", fruta);
console.log ("2. Qual a sua música favorita?", "Resposta:", musica);
console.log ("3. Qual o jogo que você mais gosta?", "Resposta:", jogo);
console.log ("4. Qual seu livro predileto?", "Resposta:", livro);
console.log ("5. Qual seu animal favorito?", "Resposta:", animal);



// Exercício 3 //

let comidas = ["Macarrão", "Risoto", "Comida japonesa", "Arroz e feijão", "Ovo mexido"];

console.log(comidas);

console.log("Essas são minhas comidas preferidas:");
console.log(comidas [0]);
console.log(comidas [1]);
console.log(comidas [2]);
console.log(comidas [3]);
console.log(comidas [4]);

let comidas2 = ["Macarrão", "Risoto", "Comida japonesa", "Arroz e feijão", "Ovo mexido"];
let comidaDoUsuario = prompt("Qual a sua comida preferida?");
comidas2[1] = comidaDoUsuario;

console.log(comidas2);



// Exercício 4 //

let perguntas = ["Você ja usou aparelho dental?", "Você gosta de dançar?", "Você gosta de figo?"];
let respostas = [true, true, false];

console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);