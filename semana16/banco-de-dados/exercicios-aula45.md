### Exercício 1
a. Este comando faz com que retiremos a coluna `salary` da tabela.

b. Altera o nome da coluna `gender` para `sex` e mantém seu limite máximo para até 6 caracteres.

c. Altera somente o limite de caracteres da coluna `gender`.

d. `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`.

### Exercício 2
a. `UPDATE Actor`
`SET name = "Caio Castro", birth_date = "1989-01-22"`
`WHERE id = "003";`.

b. `UPDATE Actor`
`SET name = "JULIANA PÃES"`
`WHERE name = "Juliana Paes";`.

`UPDATE Actor`
`SET name = "Juliana Paes"`
`WHERE name = "JULIANA PÃES";`.

c. `UPDATE Actor`
`SET`
    `name = "Sônia Braga",`
    `salary = 1000000,`
    `birth_date = "1950-06-08",`
    `gender = "female",`
    `favorite_ice_cream_flavor = "flocos"`
`WHERE id = "005";`.

d. `UPDATE Actor`
`SET name = "Justin Timberlake"`.
`WHERE id = "1568785";`.

Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
O resultado informa que nenhuma linha foi afetada porque, mesmo que a query funcione, não existe o id 1568785.

### Exercício 3
a. `DELETE FROM Actor WHERE name = "Fernanda Montenegro";`.

b. `DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;`.

### Exercício 4
a. `SELECT MAX(salary) FROM Actor;`.

b. `SELECT MIN(salary) FROM Actor WHERE gender = "female";`.

c. `SELECT COUNT(*) FROM Actor WHERE gender = "female";`.

d. `SELECT SUM(salary) FROM Actor;`.

### Exercício 5
a. Está query faz com que seja exibido todos os atores divididos por gênero e os agrupa em seus respectivos grupos (male e female).

b. `SELECT id, name FROM Actor ORDER BY name DESC;`.

c. `SELECT * FROM Actor ORDER BY salary ASC;`.

d. `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`.

e. `SELECT AVG(salary), gender FROM Actor GROUP BY gender;`.

### Exercício 6
a. `ALTER TABLE Movies ADD playing_limit_date DATE;`.

b. `ALTER TABLE Movies CHANGE rating rating FLOAT;`.

c. `UPDATE Movies`
`SET playing_limit_date = "2020-12-13"`
`WHERE name = "Doce de mãe";`.

`UPDATE Movies`
`SET playing_limit_date = "2020-09-7"`
`WHERE name = "Lagoa Azul";`.

d. `DELETE FROM Movies WHERE id = "003";`
`UPDATE Movies`
`SET synopsis = "Um filme bem legal"`
`WHERE id = "003";`.
Resultado: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
A query foi escrita corretamente, porém nenhuma linha foi afetada pela atualização porque o id não existe.

### Exercício 7
a. `SELECT COUNT(*)`
`FROM Movies`
`WHERE rating > 7.5;`.

b. `SELECT AVG(rating) FROM Movies;`.

c. `SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();`.

d. `SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();`.

e. `SELECT MAX(rating) FROM Movies;`.

f. `SELECT MIN(rating) FROM Movies;`.

### Exercício 8
a. `SELECT * FROM Movies ORDER BY name ASC;`.

b. `SELECT * FROM Movies ORDER BY name DESC LIMIT 5;`.

c. `SELECT * FROM Movies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;`.

d. `SELECT * FROM Movies WHERE rating ORDER BY rating DESC LIMIT 3;`.