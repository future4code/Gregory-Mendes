// Exercícios de interpretação de código

// Exercício 1

/* O código pede um número para o usuário e esse número é convertido de string para number. 
    Depois, a condição que está dentro do if testa se o resto da divisão entre o número digitado e 2 é 0.
    Se o usuário digita um número par, a resposta será verdadeira e ele passará no teste senão, caso o
    usuário tenha digitado um número ímpar, ele não passa. */


// Exercício 2

// A
// O código serve para informar-mos ao usuário o preço da fruta que ele digitou.

// B
// Será impresso no console o valor do preço da maçã, que é R$2.25.

// C
/* Se retirássemos o break, o código não consideraria que o case "Pêra" estivesse encerrado e iria mostrar
    o valor da pera (R$5.5) e o valor do default (R$5). */


// Exercício 3

// A
/* A primeira linha está pedindo para o usuário digitar um número e esse número será convertido de String
   para Number. */

// B
/* Se o usuário digitar 10, ele receberá a mensagem de que o número passou no teste. Caso tivesse digitado
    -10, iria aparecer um erro */

// C
/* Haverá erro no console porque a variável "mensagem" está dentro do "bloco filho". Sendo assim, por pertencer
   ao escopo do bloco filho, o "bloco pai" não consegue utilizar/acessar essa informação em seu próprio escopo,
   resultando em um erro. */


// Exercícios de escrita de código

// Exercício 4
/*
const idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18){
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}
*/


// Exercício 5
/*
const turno = prompt("Em qual turno você estuda? (M = Matutino, V = Vespertino, N = Noturno)").toUpperCase();

if (turno === "M"){
    console.log("Bom dia!");

} else if (turno === "V"){
    console.log("Boa tarde!");

} else if (turno === "N"){
    console.log("Boa noite!");

} else {
    console.log("Informe um turno válido.");
}
*/


// Exercício 6
/*
const turno = prompt("Em qual turno você estuda? (M = Matutino, V = Vespertino, N = Noturno)").toUpperCase();

switch (turno) {
    case "M":
        console.log("Bom dia!");
        break;

    case "V":
        console.log("Boa tarde!");
        break;

    case "N":
        console.log("Boa noite!");
        break;

    default:
        console.log("Informe um turno válido.");
        break;
}
*/


// Exercício 7
/*
const genero = prompt("Qual o gênero do filme do filme que vocês irão assistir?").toLowerCase();
const preco = prompt("Qual o preço do ingresso");

if (genero === "fantasia" && preco <= 15){
    console.log("Bom filme!");

} else {
    console.log("Escolha outro filme :(")
}
*/


// Desafio 1
/*
const genero = prompt("Qual o gênero do filme do filme que vocês irão assistir?").toLowerCase();
const preco = prompt("Qual o preço do ingresso");

if (genero === "fantasia" && preco <= 15){
    const snack = prompt("Qual snack você comprará?").toLowerCase();
    console.log("Bom filme!\n... com " + snack + ".");

} else {
    console.log("Escolha outro filme :(")
}
*/


// Desafio 2

const nome = prompt("Qual o seu nome?");
let tipoJogo = prompt("Qual o tipo do jogo? (IN = Internacional, DO = Doméstico)").toUpperCase();
let etapaJogo = prompt("Qual a etapa do jogo?\n(SF = Semi-final, DT = Decisão de terceiro lugar, " +
                    "FI = final)").toUpperCase();
const categoria = prompt("Qual a categoria? (1, 2, 3 ou 4)");
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"));
let precoDoIngresso;
let precoTotal;

if (tipoJogo === "IN"){
    tipoJogo = "Internacional";

} else if (tipoJogo === "DO") {
    tipoJogo = "Nacional";
}

if(etapaJogo === "SF"){
    etapaJogo = "Semi-final";

} else if (etapaJogo === "DT"){
    etapaJogo = "Decisão de terceiro lugar";

} else {
    etapaJogo = "Final";
}

switch (tipoJogo, etapaJogo, categoria){
    case "IN" && "SF" && "1":
        precoDoIngresso = 1320 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;
    
    case "IN" && "SF" && "2":
        precoDoIngresso = 880 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "SF" && "3":
        precoDoIngresso = 550 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "SF" && "4":
        precoDoIngresso = 220 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "DT" && "1":
        precoDoIngresso = 660 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "DT" && "2":
        precoDoIngresso = 440 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "DT" && "3":
        precoDoIngresso = 330 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "DT" && "4":
        precoDoIngresso = 170 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "FI" && "1":
        precoDoIngresso = 1980 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "FI" && "2":
        precoDoIngresso = 1320 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "FI" && "3":
        precoDoIngresso = 880 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "IN" && "FI" && "4":
        precoDoIngresso = 330 / 4.10;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "SF" && "1":
        precoDoIngresso = 1320;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;
    
    case "DO" && "SF" && "2":
        precoDoIngresso = 880;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "SF" && "3":
        precoDoIngresso = 550;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "SF" && "4":
        precoDoIngresso = 220;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "DT" && "1":
        precoDoIngresso = 660;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "DT" && "2":
        precoDoIngresso = 440;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "DT" && "3":
        precoDoIngresso = 330;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "DT" && "4":
        precoDoIngresso = 170;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "FI" && "1":
        precoDoIngresso = 1980;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "FI" && "2":
        precoDoIngresso = 1320;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "FI" && "3":
        precoDoIngresso = 880;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;

    case "DO" && "FI" && "4":
        precoDoIngresso = 330;
        precoTotal = quantidadeIngressos * precoDoIngresso;
        break;  
}

console.log("---Dados da compra---\nNome do Cliente: " + nome + "\nTipo do jogo: " + tipoJogo +
            "\nEtapa do Jogo: " + etapaJogo + "\nCategoria: " + categoria + "\nQuantidade de Ingressos: " +
            quantidadeIngressos + "\n---Valores---\nValor do ingresso: R$ " + precoDoIngresso +
            "\nValor total: R$ " + precoTotal);