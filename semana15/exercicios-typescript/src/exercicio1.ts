// A

/* const myString: string = 0; */
// Ao tentar atribuir um número a minha variável myString, ocorre um erro, pois ela já está tipada como string.

// B

/* let myNumber: number | string = "Oi";
myNumber = 0; */
// Consigo fazer a variável myNumber aceitar strings usando a técnica de union type, fazendo com que possa tipar a variável com mais de um tipo.

// C

/* const person: {
    name: string,
    age: number,
    favoriteColor: string
} = {
    name: "Greg",
    age: 22,
    favoriteColor: "Vermelho"
} */
//Consigo criar um objeto e passar todas as propriedades que ele tem, porém é mais fácil se eu "tipar" o objeto em si, usando a variável do tipo "type"

// D e E

/* enum RainbowColors {
    RED = "Vermelho",
    ORANGE = "Laranja",
    YELLOW = "Amarelo",
    GREEN = "Verde",
    BLUE = "Azul",
    INDIGO = "Anil",
    VIOLET = "Violeta"
}
type person = {
    name: string,
    age: number,
    favoriteColor: RainbowColors
}

const greg: person = {
    name: "Greg",
    age: 22,
    favoriteColor: RainbowColors.RED 
}

const reysla: person = {
    name: "Reysla",
    age: 29,
    favoriteColor: RainbowColors.BLUE
}

const bruna: person = {
    name: "Bruna",
    age: 29,
    favoriteColor: RainbowColors.GREEN 
} */

