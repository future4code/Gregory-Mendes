function operations(num1: number, num2: number): void {
    const add: number = num1 + num2;
    const sub: number = num1 - num2;
    const mult: number = num1 * num2;
    let higherNum: number = -Infinity
    higherNum = num1 > higherNum ? higherNum = num1 : higherNum = num2;

    console.log(`Resultado da soma: ${add}\nResultado da subtração: ${sub}\nResultado da multiplicação: ${mult}\nMaior número: ${higherNum}`);
};

operations(5, 4);