### Exercício 1
**a)** Acredito que usar strings para representar *ids* de usuários seja uma das melhores maneiras, pois dentro da sintaxe é possível mesclar números com letras, formando padrôes hexadecimais e dificultando mais o trabalho de quem desejar atacar alguma informação privada.

**b)** O código está no diretório `src/services/idGenerator.ts`

### Exercício 2
**a)** O código cria uma função assíncrona chamada `createUser` que recebe `id`, `e-mail` e `password`, todos tipados como `string`. Essa função executa uma conexão com o banco de dados, inserindo todos os parâmetros passados para a função nas colunas da tabela SQL chamada *User* (que está dentro da constante `userTableName`).

**b)**`CREATE TABLE aula50_exercicios (`
`id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,`
`email VARCHAR(255) NOT NULL UNIQUE,`
`password VARCHAR(255) NOT NULL`
`);`

**c)** O código está dentro diretório `src/data/createUser.ts`

### Exercício 3
**a)** A linha `as string` faz com que o código seja lido como uma string e precisamos passar a chave dessa maneira porque o segundo parâmetro do método `sign` que pertence ao `jwt` não tem certeza se a chave que está sendo passada é realmente uma string.

**b)** O código está no diretório `src/services/authenticator.ts`

### Exercício 7
**a)** A linha `as any` informa que o payload pode ser lido como qualquer tipo de dado (`string`, `number`, etc). Devemos utilizá-la ali para a função reconhecer que o payload pode ser tipado de qualquer forma. Uma maneira melhor seria se usássemos `as AuthenticationData` para garantir que o nosso payload está com a tipagem correta.
