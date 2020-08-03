// Exercícios de interpretação de código

// Exercício 1

// A
// O primeiro console irá imprimir o resultado de 2 * 5 (10) e o segundo, 10 * 5 (50).

// B
// Nada seria impresso, pois algo só é impresso no console se está sendo especificado dentro do console.log().


// Exercício 2

// A
/* Será impresso no console os nomes Darvas e Goli, pois o loop da função rodará enquanto o contador (i) for
    menor que 2 e a cada repetição ele imprimirá o nome da posição do índex indicada pelo contador. */

// B
/* Os nomes Amanda e Caio também seriam impressos, pois são os únicos valores do array e estão ocupando os
    índices 0 e 1 do arrayDeNomes. */

 
// Exercício 3
/* A função recebe um array como parâmetro e devolverá um outro array (arrayFinal), onde para cada elemento X
    dentro do array recebido, se o resto da divisão entre X e 2 for igual a 0, será empurrado para dentro do
    arrayFinal a multiplicação desse valor X por ele mesmo (x * x). Ao final desse processo, a função retorna
    o arrayFinal. 
    Um nome melhor para esta função poderia ser: const valoresAoQuadrado = (array) => {}. */


// Exercícios de escrita de código

// Exercício 4

// A
/*
function minhasInformacoes() {
    console.log("Eu sou o Grégory, tenho 22 anos, moro em São Paulo e sou estudante.");
}

minhasInformacoes();
*/

// B
/*
let souEstudante = true;

function informacoesPessoais(nome, idade, cidade, souEstudante) {
    if (souEstudante) {
        return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante.`);
    } else {
        return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante.`);
    }
}

informacoesPessoais("Greg", 22, "São Paulo", true);
*/


// Exercício 5

// A
/*
const somaDeDoisNumeros = (numero1, numero2) => {
    return numero1 + numero2;
}

const resultado = somaDeDoisNumeros(5, 5);
console.log(resultado);
*/

// B

const numeroMaiorOuIgual = function(numero1, numero2) {
    if (numero1 >= numero2) {
        return 
    }
}