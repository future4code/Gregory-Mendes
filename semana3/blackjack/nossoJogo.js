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

console.log("Bem vindo ao jogo de Blackjack!");

let jogadorUsuario = [];
let computador = [];
const carta = comprarCarta();

if (confirm("Quer iniciar uma nova rodada?")) {
   for (let i = 1; i <= 4; i++) {
      if (i < 3) {
         jogadorUsuario.push(carta);
      } else {
         computador.push(carta);
      }
   }
   console.log(`Usuário - cartas: ${jogadorUsuario} - pontuação: `);
   console.log(`Computador - cartas: ${computador} - pontuação: `);
} else {
   console.log("O jogo acabou.")
}
  