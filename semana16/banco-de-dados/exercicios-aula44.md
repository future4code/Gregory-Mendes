### Exercício 1
a. Além do float, temos os comandos `VARCHAR(n)`, o qual recebe uma string de no máximo n caracteres e `DATE` - representa uma data.

b. Após usar os comandos `SHOW DATABASES` e `SHOW TABLE`, os resultados apareceram na área de visualização de tabelas.

c. Ao utilizar o comando `SHOW Actor`, foi apresentado todos os campos definidos na tabela `Actor`.

### Exercício 2
a. `INSERT INTO Actor (id, name, salary, birth_date, gender)`
`VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male"),`
`("002", "Glória Pires", "1200000", "1963-08-23", "female");`

b. `Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'`.
Este erro ocorreu porque tentei criar um outro elemento com uma `PRIMARY KEY` já existente.

c.`Error Code: 1136. Column count doesn't match value count at row 1`.
Significa que os valores inseridos na coluna da tabela não são equivalente com o número de dados inseridos na linha da mesma.
Solução:
`INSERT INTO Actor (id, name, salary, birth_date, gender)`
`VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female" );`.

d. `Error Code: 1364: Field 'name' doesn't have a default value`
Este erro ocorreu porque o campo `name` não pode ser nulo.
Solução:
`INSERT INTO Actor (id, name, salary, birth_date, gender)`
`VALUES("004", "Johnny Depp", 400000, "1949-04-18", "male");`.

e. `Error Code: 1292. Incorrect data value: Incorrect data value'1950' for column 'birth_date' at row 1`.
Este erro aconteceu porque a data de nascimento não foi enviada no formato de `string`.
Solução:
`INSERT INTO Actor (id, name, salary, birth_date, gender)`
`VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");`.

### Exercício 3
a. `SELECT * FROM Actor WHERE gender = "female";`.

b. `SELECT salary FROM Actor WHERE name = "Tony Ramos";`.

c. `SELECT * FROM Actor WHERE gender = "invalid";`.
Foi retornada uma tabela somente com os valores `NULL` em cada coluna porque nenhum valor 'invalid'.

d. `SELECT id, name, salary FROM Actor WHERE salary < 500000;`.

e. `Error Code: 1054. Unknown column 'nome' in field list`.
Solução:
`SELECT id, name from Actor WHERE id = "002"`.

### Exercício 4
a. A query retorna todos os dados (`SELECT * FROM Actor`) de atores que atendam que tenham seus nomes iniciados pela letra A ou J (`SELECT * FROM Actor`) e tenham salário maior que R$300.000,00 (`AND salary > 300000`).
Query completa: `SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;`.

b. `SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;`.

c. `SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";`.

d. `SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;`

### Exercício 5
a.`CREATE TABLE Movies (`
    `id VARCHAR(255) PRIMARY KEY,`
    `name VARCHAR(255) NOT NULL,`
	`synopsis TEXT NOT NULL,`
    `release_date DATE NOT NULL,`
    `rating INT,` 
    `CHECK (rating BETWEEN 0 AND 10)`
);`
Este código cria uma tabela chamada Movies e que tem os campos id, name, synopsis, release_date e rating.

b. `INSERT INTO Movies (id, name, synopsis, release_date, rating)`
`VALUES ("001", "Se Eu Fosse Você",`
`"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.`
`Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpo.",`
`"2006-01-06", 7);`.

c. `INSERT INTO Movies (id, name, synopsis, release_date, rating)`
`VALUES ("002", "Doce de mãe",`
`Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.`
`A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida,",`
`empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",`
`"2012-12-27", 10);`.

d. `INSERT INTO Movies (id, name, synopsis, release_date, rating)`
`VALUES ("003", "Dona Flor e Seus Dois Maridos",`
`"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.`
`A vida de abusos acaba por acarretar sua morte precoce.",`
`"2017-11-02", 8);`.

e. `INSERT INTO Movies (id, name, synopsis, release_date, rating)`
`VALUES ("004", "Lagoa Azul",`
`"Após um naufrágio, duas crianças e o velho cozinheiro de um navio vão parar em uma ilha deserta no Oceano Pacífico.`
`Pouco tempo depois, o cozinheiro morre, deixando o menino Richard e a menina Emmeline entregues à própria sorte.",`
`"1980-06-20", 2);`.

### Exercício 6
a. `SELECT id, name, rating FROM Movies WHERE id = "003";`.

b. `SELECT * FROM Movies WHERE name = "Lagoa Azul";`.

c. `SELECT id, name, synopsis FROM Movies WHERE rating >= 7;`.

### Exercício 7

a. `SELECT * FROM Movies WHERE name = "%vida%";`.

b. `SELECT * FROM Movies WHERE synopsis LIKE "%casa%";`.

c. `SELECT * FROM Movies WHERE release_date < "2020-01-01";`.

d. `SELECT * FROM Movies WHERE synopsis LIKE "%casa%" AND release_date < "2020-01-01" AND rating > 7;`.