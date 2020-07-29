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

if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === "1"){
    tipoJogo = "Internacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 1320 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === "2") {
    tipoJogo = "Internacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 880 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === "3") {
    tipoJogo = "Internacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 550 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === "4") {
    tipoJogo = "Internacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 220 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === "1") {
    tipoJogo = "Internacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 600 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === "2") {
    tipoJogo = "Internacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 440 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === "3") {
    tipoJogo = "Internacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 330 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === "4") {
    tipoJogo = "Internacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 170 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === "1") {
    tipoJogo = "Internacional";
    etapaJogo = "Final";
    precoDoIngresso = 1980 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === "2") {
    tipoJogo = "Internacional";
    etapaJogo = "Final";
    precoDoIngresso = 1320 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === "3") {
    tipoJogo = "Internacional";
    etapaJogo = "Final";
    precoDoIngresso = 880 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === "4") {
    tipoJogo = "Internacional";
    etapaJogo = "Final";
    precoDoIngresso = 330 / 4.10;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === "1") {
    tipoJogo = "Nacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 1320;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === "2") {
    tipoJogo = "Nacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 880;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === "3") {
    tipoJogo = "Nacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 550;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === "4") {
    tipoJogo = "Nacional";
    etapaJogo = "Semi-final";
    precoDoIngresso = 220;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === "1") {
    tipoJogo = "Nacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 660;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === "2") {
    tipoJogo = "Nacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 440;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === "3") {
    tipoJogo = "Nacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 330;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === "4") {
    tipoJogo = "Nacional";
    etapaJogo = "Decisão de terceiro lugar";
    precoDoIngresso = 170;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === "1") {
    tipoJogo = "Nacional";
    etapaJogo = "Final";
    precoDoIngresso = 1980;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === "2") {
    tipoJogo = "Nacional";
    etapaJogo = "Final";
    precoDoIngresso = 1320;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === "3") {
    tipoJogo = "Nacional";
    etapaJogo = "Final";
    precoDoIngresso = 880;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === "4") {
    tipoJogo = "Nacional";
    etapaJogo = "Final";
    precoDoIngresso = 330;
    precoTotal = quantidadeIngressos * precoDoIngresso;

} else {
    console.log("Digite informações válidas.")
}

console.log("---Dados da compra---\nNome do Cliente: " + nome + "\nTipo do jogo: " + tipoJogo +
            "\nEtapa do Jogo: " + etapaJogo + "\nCategoria: " + categoria + "\nQuantidade de Ingressos: " +
            quantidadeIngressos + "\n---Valores---\nValor do ingresso: R$ " + precoDoIngresso +
            "\nValor total: R$ " + precoTotal);