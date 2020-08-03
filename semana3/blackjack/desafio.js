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


while (confirm("Quer iniciar uma nova rodada?")) {
   // Jogo começa.
   let cartasUsuario = [];
   let cartasComputador = [];
   let pontosUsuario = 0;
   let pontosComputador = 0;
   let cartasDiferentes = false;


   // Setup inicial - Distribuir duas cartas para cada jogador enquanto eles não saírem com cartas diferentes na mão.
   while (cartasDiferentes === false) {
      for (let i = 0; i < 4; i++) {
         const carta = comprarCarta();
   
         if (i < 2) {
            cartasUsuario.push(carta.texto);
            pontosUsuario += carta.valor;
         } else {
            cartasComputador.push(carta.texto);
            pontosComputador += carta.valor;
         }
      }
   
      const valorCartaUmUsuario = cartasUsuario[0].charAt(0);
      const valorCartaDoisUsuario = cartasUsuario[1].charAt(0);
      const valorCartaUmComputador = cartasComputador[0].charAt(0);
      const valorCartaDoisComputador = cartasComputador[1].charAt(0);
   
      if (valorCartaUmUsuario === "A" && valorCartaDoisUsuario === "A" || 
            valorCartaUmComputador === "A" && valorCartaDoisComputador === "A") {
         alert(`Usuário - cartas: ${cartasUsuario} - pontuação: ${pontosUsuario}` + 
         `\nComputador - cartas: ${cartasComputador} - pontuação: ${pontosComputador}`);
         cartasUsuario.splice(0, 2);
         cartasComputador.splice(0, 2);
         pontosUsuario = 0;
         pontosComputador = 0;
      } else {
         cartasDiferentes = true;
      }
      
   }
   
   alert(`Usuário - cartas: ${cartasUsuario} - pontuação: ${pontosUsuario}`);
   
   // Vez do jogador.
   while (pontosUsuario < 21 && confirm("Deseja comprar mais uma carta?")) {
      const carta = comprarCarta();

      cartasUsuario.push(carta.texto);
      pontosUsuario += carta.valor;

      alert(`A carta comprada foi: ${carta.texto}\nSua nova mão é: ${cartasUsuario}` +
            ` - Sua nova pontuação é: ${pontosUsuario}`);
   }

   // Verificar se o usuário já perdeu (fez mais que 21 pontos) ou se ele ganhou (fez 21 pontos).
   if (pontosUsuario > 21) {
      alert("Você estourou os 21 pontos! O computador venceu!");
   } else if (pontosUsuario === 21) {
      alert("Você venceu! Parabéns :)");
   } else {
      // Vez do computador
      while (pontosComputador < pontosUsuario) {
         const carta = comprarCarta();
   
         cartasComputador.push(carta.texto);
         pontosComputador += carta.valor;
      }

      // Resultado do jogo.
      if ((pontosComputador === 21) || 
            (pontosComputador < 21 && pontosComputador > pontosUsuario)) {
         alert("O computador venceu!");
      } else if (pontosUsuario === pontosComputador) {
         alert("Empate!");
      } else {
         alert("Você venceu! Parabéns :)");
      }   
   }

   // Exibindo pontuação.
   alert(`Usuário - cartas: ${cartasUsuario} - pontuação: ${pontosUsuario}` + 
   `\nComputador - cartas: ${cartasComputador} - pontuação: ${pontosComputador}`);   
}

alert("O jogo acabou.");
