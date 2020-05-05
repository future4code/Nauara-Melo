#### Exercicio 1
a) ALTER TABLE Actors DROP COLUMN salary; apaga a coluna salary.
b) ALTER TABLE Actors CHANGE gender sex VARCHAR(6); muda de gender para sex, aceitando strings com até 6 caracteres.
c) ALTER TABLE Actors CHANGE gender gender VARCHAR(255); muda o gender para que ele aceite strings com até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)

#### Exercicio 2
a) UPDATE Actor 
SET name = "Araci Balabanian", birth_data = "1940-02-22"
WHERE id = "003" ;

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"; /
UPDATE Actor
SET name = "Juliana Paes" 
WHERE name = "JULIANA PÃES"; 

c) UPDATE Actor
SET 
name = "Marisa Orth",
salary = "100000",
birth_data = "1963-10-21",
gender = "female"
WHERE id = "005";

d) UPDATE Actor
SET 
name = "Marisa Orth",
WHERE id = "010";
Código de erro: 1064. Você tem um erro na sintaxe do SQL

#### Exercicio 3 
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"
b) DELETE FROM Actor WHERE gender = "male" and salary > 1000000

#### Exercicio 4 
a) SELECT MAX(Salary) FROM Actor;
b) SELECT MIN(Salary) FROM Actor WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;

#### Exercicio 5 
a) A QUERY trouxe a quantidade de atores e atrizes agrupados por gêneros, sendo 3 atores do gênero masculino e 4 atrizes do gênero feminino.
b) SELECT id, name FROM Actor ORDER BY name ASC;
c) SELECT * FROM Actor ORDER BY salary ASC;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary) FROM Actor GROUP BY gender;

#### Exercicio 6 
a) ALTER TABLE Movie ADD playing_limit_date DATE; 
b) ALTER TABLE Movie CHANGE rating rating FLOAT
c) UPDATE Movie
SET playing_limit_date = "2020-05-30"
WHERE id = "002"; / 
UPDATE Movie
SET playing_limit_date = "2020-03-30"
WHERE id = "002";
d) DELETE FROM Movie WHERE id = "001";
UPDATE Movie SET sipnose = "Mudando Sipnose" WHERE id = "001"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0.
O comando rodou, mas não alterou linha nenhuma da tabela.


#### Exercicio 7
a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5 : 3
b) SELECT AVG(rating) FROM Movie; : 9
c) SSELECT COUNT(*) FROM Movie WHERE playing_limit_date > curdate(); : 1
d) SELECT COUNT(*) FROM Movie WHERE release_date < curdate();: 3
e) SELECT MAX(rating) FROM Movie;: 10
f) SELECT MIN(rating) FROM Movie;: 8

#### Exercicio 8 
a) SELECT * FROM Movie ORDER BY name;
b) SELECT * FROM Movie ORDER BY name DESC LIMIT 5;
c) SELECT * FROM Movie WHERE release_date < curdate() ORDER BY release_date DESC LIMIT 3;
d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3