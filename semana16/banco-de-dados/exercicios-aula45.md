### Exercício 1
a. Chave estrangeira é um tipo de chave que é utilizada para fazer relações entre tabelas.

b. `CREATE TABLE Rating (`
`id VARCHAR(255) PRIMARY KEY,`
`comment TEXT NOT NULL,`
`rate FLOAT NOT NULL,`
`movie_id VARCHAR(255),`
`FOREIGN KEY (movie_id) REFERENCES Movies(id)`
`);`.

`INSERT INTO Rating VALUES`
`("1", "Filme maravilhoso demais", 9, "002"),`
`("2", "Bem legal, duas pessoas e uma lagoa linda", 8,"004"),`
`("3", "Confundiu minha cabeça, mas gostei muito!", 9.5, "001");`.

c. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-gregory-mendes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
Este erro aconteceu porque a restrição da chave estrangeira reconheceu que o id inserido é inexistente na tabela Movies.

d. `ALTER TABLE Movies`
`DROP COLUMN rating;`.

e. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-gregory-mendes`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
Este erro ocorreu porque não podemos deletas algum elemento de um tabela sem deletar tudo que está relacionado a ele anteriormente.

### Exercício 2
a. Essa tabela relaciona filmes com atores e vice-versa, usando o ID de cada como condição de inserção.

b. `INSERT INTO MovieCast VALUES`
`("001", "004"),`
`("001", "001"),`
`("002", "003"),`
`("002", "007"),`
`("004", "005"),`
`("004", "001");`

c. Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-gregory-mendes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Este erro ocorreu porque a restrição da chave estrangeira reconheceu que o id inserido é inexistente na tabela Movies.
Aconteceria o mesmo erro se eu tivesse colocado um id inexistente vindo da tabela Actor.

d. Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-gregory-mendes`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Este erro ocorreu porque ainda existe relação do ator com a tabela MovieCast, então não é possível fazer a deleção sem antes apagar as relações que o ator possui.

### Exercício 3
a. A query faz com que vejamos os dados das duas tabelas, onde o operador ON executa uma condição para que essa junção de tabelas seja feita. No caso, o operador ON está pedindo para juntarmos as tabelas com a condição do id do filme na tabela Movies ser igual ao id do filme avaliado na tabela Rating.

b. `SELECT movie_id, name, rate FROM Movies`
`INNER JOIN Rating`
`ON Movies.id = Rating.movie_id;`.

### Exercício 4
a. `SELECT m.id, m.name, r.rate, r.comment FROM Movies m`
`LEFT JOIN Rating r`
`ON m.id = r.movie_id;`.

b. `SELECT m.id as movie_id, m.name, ac.id as actor_id FROM Movies m`
`RIGHT JOIN Actor ac`
`ON ac.id = m.id;`.

c.`SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m`
`RIGHT JOIN MovieCast mc`
`ON mc.movie_id = m.id;`.

d.`SELECT AVG(r.rate), m.id, m.name FROM Movies m`
`LEFT JOIN Rating r`
`ON m.id = r.movie_id`
`GROUP BY (m.id);`

### Exercício 5
a. A query está reunindo as informações das tabelas Movies, MovieCast e Actor. Devemos usar dois comandos JOIN, porque devemos separar, por ordem, qual relação sera feita primeiro. Neste caso, primeiro juntamos os dados da tabela Movies com os dados da tabela MovieCast e depois, Actor com MovieCast.

b. `SELECT`
	`m.id as movie_id,`
    `m.name as movie_title,`
    `a.id as actor_id,`
    `a.name as actor_name`
`FROM Movies m`
`LEFT JOIN MovieCast mc ON m.id = mc.movie_id`
`JOIN Actor a ON a.id = mc.actor_id;`

c. Basicamente com o uso do ALIAS (comando AS) foi possível apelidar todos os campos, deixando mais legível a tabela resultante das relações feitas na query.

d. `SELECT`
	`m.name as movie_title,`
    `a.name as actor_name,`
   `r.rate as rating,`
    `r.comment`
`FROM Movies m`
`LEFT JOIN MovieCast mc ON m.id = mc.movie_id`
`JOIN Actor a ON a.id = mc.actor_id`
`JOIN Rating r ON m.id = r.movie_id;`

### Exercício 6
a. É uma relação N:M (muitos pra muitos), porque um filme pode ganhar vários Óscar assim como um Óscar pode ser dado para filmes diferentes.

b. `CREATE TABLE Oscar (`
`oscar_name VARCHAR(255) DEFAULT "Sem Óscar",`
`oscar_date DATE,`
`movie_id VARCHAR(255),`
`FOREIGN KEY (movie_id) REFERENCES Movies(id)`
`);`

c. `INSERT INTO Oscar VALUES`
`("Melhor filme de comédia", "2018-08-12", "001"),`
`("Melhor direção", "2018-08-12", "001"),`
`("Melhor figurino", "2019-09-05", "002"),`
`("Melhor trilha sonora", "2019-09-05", "002"),`
`("Melhor filme", "2020-07-27", "004"),`
`("Melhor fotografia", "2020-07-27", "004");`

d.`SELECT m.name as movie_name, o.oscar_name, o.oscar_date FROM Movies m`
`LEFT JOIN Oscar o ON m.id = o.movie_id;`