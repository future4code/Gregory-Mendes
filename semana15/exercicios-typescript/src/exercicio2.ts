// A, B e C
// A - A entrada da funcão é um array de números e a saída são as estatisticas (maior, menor e média).
// B - As outras variáveis são: numerosOrdenados (number[]), parâmetros do sort (a e b são do tipo number), soma (number), estatísticas(Object).
/* function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    );

    let soma: number = 0;

    for (let num of numeros) {
        soma += num;
    };

    const estatisticas: Object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
};

type amostraDeDados = {
    numeros: [17, 14, 26, 19, 5],
    obterEstatisticas: (numeros: number[]) => Object
}; */