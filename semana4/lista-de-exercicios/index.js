//Exercícios de interpretação de código

//Exercício 1
/* É criada uma função (conversorDeMoeda) que recebe como parâmetro um valor (valorEmDolar).
    Dentro desta função, existe uma variável (cotacao) que recebe o valor da cotacão do dólar indicado pelo
    usuário e converte esse valor de string para número usando o cast Number. Após isso, a função retorna o
    começo de uma string como R$ mais a operação que multiplica o valor passado no parâmetro da função pelo
    valor de cotação indicado pelo usuário.
    Depois, fora da função, é criada uma variável (meuDinheiro) que recebe a função em si com o valor 100
    passado como parâmetro e em seguido é impresso no console o resultado armazenado na variável meuDinheiro.
    Se, por exemplo, o valor de cotação digitado pelo usuário for 5, então o console vai apresentar o 
    resultado R$500. */

//Exercício 2
/* É uma função (investeDinheiro) que recebe dois parâmetros, tipoDeInvestimento e valor. Dentro desta função
    foi criada uma variável vazia (let valorAposInvestimento) e após entramos em um switch que recebe como
    parâmetro os tipos de investimento. Dentro do switch, temos 4 cases (Poupança, Renda Fixa, CDB e Ações) e
    um default que exibe uma mensagem informando que o tipo de investimento digitado está incorreto.
    Cada case acrescenta na variável valorAposInvestimento o próprio valor recebido no parâmetro da função 
    vezes a taxa representada em cada tipo de investimento. Logo após as informações serem validadas,
    a função retorna a variável valorAposInvestimento com o valor atualizado.
    Fora da função temos duas variáveis (novoMontante e segundoMontante) que recebem a função com seus
    parâmetros preenchidos e apresenta o resultado em um console.log.
    1° console: 165
    2° console: aparecerá um alert na tela, pois o tipo de investimento Tesouro Direto não existe nos cases. */

//Exercício 3
/* Temos 3 variáveis declaradas: um array de números (numeros) e dois arrays vazios (array1 e array2).
    É utilizado um for...of... para percorrer o array de números e a cada número percorrido ele executará um if,
    onde se o resto da divisão entre numero atual por 2 for igual a 0 (se o numero atual for par), este valor
    será empurrado para dentro do array1, senão (caso for ímpar) será empurrado para o array2.
    Após isso, será exibido: 1° console: Quantidade total de números 14 (onde 14 é representado por 
    numeros.lenght);
    2° console: 6;
    3° console: 8. */

//Exercício 4
/* Temos 3 variáveis, uma que recebe um array de números (numeros), outra que recebe um valor infinito
    (numero1) e outra que recebe 0 (numero2). Um for...of... é usado para percorrer o array e, para cada numero
    dentro do array, se o número analisado for menor do que o valor em numero1 (Infinity), então o valor em
    numero1 será substituido pelo novo e se o numero for maior do que o valor em numero2, então a variável 
    numero2 também recebe este valor, substituindo o anterior.
    Ao final, os consoles mostram o valor final de numero1 e numero2, que são, respectivamente: -10 e 1590 */


//Exercícios de Lógica de Programação

//Exercício 1
//Podemos percorrer uma lista usando o while, o for e o for...of...

//const array = [5, 7, 2, 85, 40, 9];

//while
/* 
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
} */

//for
/* 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} */

// for...of...
/* 
for (let numero of array) {
    console.log(numero);
} */

//Exercício 2
/*  
Resposta A: false
Resposta B: false
Resposta C: true
Resposta D: true
Resposta E: true */

//Exercício 3
/* O código não funciona porque a variável i não estava recebendo incremento após apresentar o resultado
    no console, criando um loop infinito, além de que o valor de i deve ser somente menor que a quantidade
    digitada pelo usuário para exibir exatamente o número de pares esperado.

const quantidadeDeNumerosPares = Number(prompt("Digite um valor para exibir a quantidade de pares."))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++;
} */

//Exercício 4
/* 
const tipoDeTriangulo = (valorA, valorB, valorC) => {
    if (valorA !== valorB && valorA !== valorC && valorB !== valorC) {
        console.log("O triângulo é Escaleno.");
    } else if (valorA === valorB && valorA === valorC && valorB === valorC) {
        console.log("O triângulo é Equilátero.");
    } else {
        console.log("O triângulo é Isósceles.");
    }
}

const resultado = tipoDeTriangulo(8, 5, 7);
console.log(resultado); */

//Exercício 5
/*
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));
const diferenca = numero1 - numero2;
const diferencaReversa = numero2 - numero1;

if (numero1 > numero2) {
    console.log(`O maior número é: ${numero1}.`);
} else if (numero1 < numero2){
    console.log(`O maior número é: ${numero2}.`);
} else {
    console.log("Os números são iguais.")
}

if (numero1 % numero2 === 0 ) {
    console.log(`${numero1} é divisível por ${numero2}`);
} else {
    console.log(`${numero1} não é divisível por ${numero2}`)
}

if (numero2 % numero1 === 0 ) {
    console.log(`${numero2} é divisível por ${numero1}`);
} else {
    console.log(`${numero2} não é divisível por ${numero1}`);
}

if (numero1 < numero2) {
    console.log(`A diferença entre eles é de ${diferencaReversa}`);
} else {
    console.log(`A diferença entre eles é de ${diferenca}`);
} */


//Exercícios de Funções

//Exercício 1
/* 
const array = [44, 23, 57, 2, 9, 113, 98, 52, 95, 37, 26, 450, -50];

function mostrarSegundoMaiorEMenor(arrayDeNumeros) {
    let maiorNumero = -Infinity;
    let menorNumero = Infinity;
    let segundoMaior = -Infinity;
    let segundoMenor = Infinity;
    
    for (let numero of arrayDeNumeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }

        if (numero < menorNumero) {
            menorNumero = numero;
        }   
    }

    for (let numero of arrayDeNumeros) {
        if (numero > segundoMaior && numero < maiorNumero) {
            segundoMaior = numero;
        }

        if (numero < segundoMenor && numero > menorNumero) {
            segundoMenor = numero;
        }   
    }

    return console.log(`O segundo maior é o ${segundoMaior}.\nO segundo menor é o ${segundoMenor}.`);
}

mostrarSegundoMaiorEMenor(array); */

//Exercício 2
/* 
const mensagem = "Hello Labenu!"

const exibeAlert = (mensagemDeAlert) => {
    alert(mensagemDeAlert);
}

exibeAlert(mensagem); */


//Exercícios de Objetos

//Exercício 1
/* Os objetos são estruturas que servem para representar algo complexo do mundo real de maneira
    mais intuitiva e organizada. Por exemplo, uma fruta tem nome, cor, sabor, textura, etc. 
    A fruta em si poderia ser nosso objeto e o restante, suas propriedades.
    Podemos utilizar objetos e arrays quando, por exemplo, eu quero que cada elemento de
    um array seja um objeto diferente, cada um com suas propriedades. Também podemos
    acessar propriedades de um objeto externo para fazer modificações em um array, como
    por exemplo as propriedades: .push(), .splice(), .pop(), .indexOf() e etc.*/

//Exercício 2
/* 
function criarRetangulo (lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }

    return retangulo;
}

console.log(criarRetangulo(5, 6)) */

//Exercício 3
/* 
const filme = {
    titulo: "The Greatest Showman",
    ano: 2017,
    diretor: "Michael Gracey",
    elenco: ["Hugh Jackman", " Zac Efron", " Zendaya", " Keala Settle", " Michele Williams", "Rebecca Ferguson"]
}

console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}` +
             `e estrelado por ${filme.elenco.slice(0, filme.elenco.length - 1)}` +
             ` e ${filme.elenco[filme.elenco.length - 1]}.`); */