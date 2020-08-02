/**
* EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
* 
* 
   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
* 
* 
* 
*/
/*
console.log("Bem vindo ao jogo de Blackjack!");

let cartasUsuario = [];
let cartasComputador = [];
let pontosUsuario = 0;
let pontosComputador = 0;
let carta;

if(confirm("Quer iniciar uma nova rodada?")) {
   for (let i = 0; i < 4; i++) {
      carta = comprarCarta();
      if (i < 2) {
         cartasUsuario.push(carta.texto);
         pontosUsuario += carta.valor;
      } else {
         cartasComputador.push(carta.texto);
         pontosComputador += carta.valor;
      }
   }
   console.log(`Usuário - cartas: ${cartasUsuario} - pontuação: ${pontosUsuario}`);
   console.log(`Computador - cartas: ${cartasComputador} - pontuação: ${pontosComputador} `);

   if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!");
   } else if (pontosUsuario < pontosComputador) {
      console.log("O computador venceu!");
   } else {
      console.log("Empate!");
   }
}
*/