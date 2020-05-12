## Exercicio 1

a) É um campo que estabelece o relacionamento com outras tabelas, a FOREIG KEY deve sempre se referenciar a uma PRIMARY KEY da outra tabela.

b) 
~~~CREATE TABLE Rating(
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, movie_id)
VALUES(
"001",
"Excelente Filme.",
"002"
);

INSERT INTO Rating (id, comment, movie_id)
VALUES(
"002",
"Emocionante",
"003"
);

INSERT INTO Rating (id, comment, movie_id)
VALUES (
"003",
"Muito bom.",
"004"
);

INSERT INTO Rating (id, comment, movie_id)
VALUES (
"004",
"As crianças adoraram!",
"005"
);
~~~

c) Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

d) 
`ALTER TABLE Movie DROP COLUMN rating;`

e)
`DELETE FROM Movie WHERE rating = "10";`
Código de erro: 1054. Coluna desconhecida 'rating' in 'where cláusula' 

## Exercicio 2

a) A tabela MovieCast é uma tabela de relação, onde terá duas colunas com o id do filme e o id do ator, se referenciando aos atores e filmes através de `FOREING KEY`.

b) 
~~~ 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"003"
); 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"002",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"003",
"004"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"004",
"001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"005",
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
"002",
"006"
);
~~~

c)  Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha.

d) Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha.

## Exercicio 3 

a) A query `SELECT * FROM Movie INNER JOIN Rating ON Movie.id = Rating.movie_id;` seleciona todos os campos da tabela Movie onde o movie tenha correspondencia na tabela Rating, ou seja, retorna todos os filmes que possuem avaliação.

b) 
~~~ 
SELECT name, movie_id, rate FROM Movie
iNNER JOIN Rating ON Movie.id = Rating.movie_id;
ou
SELECT m.name, movie_id, r.rate from Movie m 
INNER JOIN Rating r ON m.id = r.movie_id;
~~~

## Exercicio 4 
a) 
`SELECT m.name, movie_id, r.rate, r.comment FROM Movie m` `LEFT JOIN Rating r ON m.id = r.movie_id;`


b) 
`SELECT movie_id, m.name, mc.actor_id FROM Movie m`
`RIGHT JOIN MovieCast mc ON mc.movie_id = m.id`

c) 
`SELECT AVG(r.rate), m.name, m.id FROM Movie m`
`LEFT JOIN Rating r ON m.id = r.movie_id`
`GROUP BY m.id;`

## Exercicio 5 

a) Há necessidades de dois JOIN porque precisamos unir a tabela de relação com uma tabela independente e depois com a outra, para que a tabela de relação pegue as informações com uma e depois poder se unir a outra. 

b)
~~~
SELECT movie_id, m.name as movie_name, actor_id, a.name as actor_name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

c) A query trouxe apenas o filme e o id e o actor e o id, com "apelidos" para não terem o mesmo título nas colunas da tabela. 

#### Exercicio 6 

a) A relação é M:N, porque um filme pode ganhar varios ' Óscares, mas um óscar só vai para um filme, ao menos, por ano. 

b) 
~~~
CREATE TABLE Oscar (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255),
movie_id VARCHAR(255),
date_oscar DATE,
FOREIGN KEY (movie_id) REFERENCES Movie(id)
); 
~~~

c) 
~~~
INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"001",
"Oscar de Melhor direção",
"002",
"2019-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"003",
"Oscar de Melhor atriz coadjuvante",
"003",
"2019-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"004",
"Oscar de Melhor filme",
"003",
"2019-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"005",
"Oscar de Melhor filme",
"004",
"2018-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"006",
"Oscar de Melhor Direção",
"004",
"2018-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"007",
"Oscar de Melhor filme",
"005",
"2017-08-05"
);

INSERT INTO Oscar (id, name, movie_id, date_oscar)
VALUES(
"008",
"Oscar de Melhor atriz",
"005",
"2019-08-05"
);
~~~


d)
`SELECT m.name, o.name FROM Movie m`
`LEFT JOIN Oscar o ON m.id = o.movie_id`