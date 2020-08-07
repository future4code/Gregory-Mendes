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
    É utilizado um for...of para percorrer o array de números e a cada número percorrido ele executará um if,
    onde se o resto da divisão entre numero atual por 2 for igual a 0 (se o numero atual for par), este valor
    será empurrado para dentro do array1, senão (caso for ímpar) será empurrado para o array2.
    Após isso, será exibido: 1° console: Quantidade total de números 14 (onde 14 é representado por 
    numeros.lenght);
    2° console: 6;
    3° console: 8. */

// Exercício 4
/* */