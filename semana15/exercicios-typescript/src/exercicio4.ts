// A - No terminal eu digitaria "tsc exercicio4.ts", fazendo com que o arquivo exercicio4.js fosse criado.
// B - Seria sim. Primeiro eu teria que digitar o caminho até o arquivo, desta maneira: tsc src/exercicio4.ts.
// C - para transpilar múltiplos arquivos, podemos executar o tsc --init para criar um arquivo tsconfig.json,
// que nos auxilia nesse processo.
// D - A diferença é que há alguns parâmetros do arquivo tsconfig.json foram descomentados para aproveitarmos mais
// suas configurações, como por exemplo o outDir e o rootDir, onde podemos adicionar o caminho das pastas build e src, respectivamente.

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon2: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}