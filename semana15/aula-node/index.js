// Exercício 1

// A
/* Dentro do nosso arquivo conseguimos usar a propriedade process.argv para pegar as informações (parâmetros) que passarmos para o terminal. */

// B

/* const name = process.argv[2];
const age =  process.argv[3];

console.log(`Olá, ${name}!, Você tem ${age} anos.`); */

// C

/* const name = process.argv[2];
const age =  Number(process.argv[3]);

console.log(`Olá, ${name}!, Você tem ${age} anos. Em sete anos você terá ${age + 7}`); */

// Exercício 2

/* const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const mathematicalOperations = (operation, num1, num2) => {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        
        case "sub":
            result = num1 - num2;
            break;

        case "mult":
            result = num1 * num2;
            break;

        case "div":
            result = num1 / num2;
            break;
    };

    return console.log(result);
};

mathematicalOperations(operation, num1, num2); */

// Exercício 3

/* const userTask = process.argv[2];
const tasksList = ["Fazer pipoca", "Pular corda"];

const showTasks = (task) => {
    tasksList.push(task);

    return console.log(`Tarefa adicionada com sucesso!\n\n${tasksList}`);
};

showTasks(userTask); */

