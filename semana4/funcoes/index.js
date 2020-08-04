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

/* function informacoesPessoais(nome, idade, cidade, souEstudante) {
    if (souEstudante === true) {
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
/*
const numeroMaiorOuIgual = function(numero1, numero2) {
    if (numero1 >= numero2) {
        return true;
    } else {
        return false;
    }
}

const resultadoBooleano = numeroMaiorOuIgual(13, 2);
console.log(resultadoBooleano);
*/

// C
/*
function imprimirDezVezes(mensagem) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}. ${mensagem}`);
    }

    return mensagem;
}

imprimirDezVezes("Oi, eu sou o Greg!");
*/


// Exercício 6

//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// A
/*
function quantidadeElementos(arrayDeNumeros) {
    return arrayDeNumeros.length;
}

console.log(quantidadeElementos(array));
*/

// B
/*
function verificaNumeroPar(numero) {
    numeroPar = true;
    if (numero % 2 === 0) {
        true
    } else {
        numeroPar = false
    }

    return numeroPar;
}

console.log(verificaNumeroPar(17));
*/


// C
/*
function mostrarQuantidadeNumerosPares(arrayDeNumeros) {
    let qtdPares = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 === 0) {
            qtdPares++;
        }
    }

    return qtdPares;
}

console.log(mostrarQuantidadeNumerosPares(array));
*/

// D
/*
function mostrarQuantidadeNumerosPares(arrayDeNumeros) {
    let qtdPares = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (verificaNumeroPar(arrayDeNumeros[i])) {
            qtdPares++;
        }
    }

    return qtdPares;
}

console.log(mostrarQuantidadeNumerosPares(array));
*/


// Desafios

// Exercício 1
/*
// 1
const resultadoSoma = (resultado) => {
    return console.log(resultado);
}

// 2
const somaNumeros = (numero1, numero2) => {
    const soma = numero1 + numero2;
    resultadoSoma(soma);
}

const resposta = somaNumeros(2, 2);
*/


// Exercício 2

//const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];

// A
/*
function mostrarQuantidadeNumerosPares(arrayDeNumeros) {
    let dobroDosPares = []
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] % 2 === 0) {
            dobroDosPares.push(arrayDeNumeros[i] * 2);
        }
    }

    return dobroDosPares;
}

console.log(mostrarQuantidadeNumerosPares(numeros));
*/

// B
/*
function mostrarMaiorNumero(arrayDeNumeros) {
    let maiorNumero = -Infinity;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > maiorNumero) {
            maiorNumero = arrayDeNumeros[i];
        }
    }

    return maiorNumero;
}

console.log(mostrarMaiorNumero(numeros));
*/

// C
/*
function mostrarMaiorNumero(arrayDeNumeros) {
    let maiorNumero = -Infinity;
    let indiceMaiorNumero = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > maiorNumero) {
            maiorNumero = arrayDeNumeros[i];
            indiceMaiorNumero = i;
        }
    }

    return indiceMaiorNumero;
}

console.log(mostrarMaiorNumero(numeros));
*/

// D
/*
function mostrarMaiorNumero(arrayDeNumeros) {
    let numerosInvertidos = [];
    for (let i = arrayDeNumeros.length - 1; i >= 0; i--) {
        numerosInvertidos.push(arrayDeNumeros[i]);
    }

    return numerosInvertidos;
}

console.log(mostrarMaiorNumero(numeros));
*/
