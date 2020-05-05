#### Exercicio 1
a) 
create table: criar tabela
varchar(n): Declarar uma string com no máximo n caracteres
date: representa uma data (no formato YYYY-MM-DD)

b) SHOW databases mostrou as databases que possuem no mysql
SHOW tables retornou as tabelas que existem. 

c) DESCRIBE Actor mostra as colunas da tabela.

#### Exercicio 2
a) INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
"002",
"Gloria Pires",
1200000,
"1963-08-23",
"female"
);

b) Entrada duplicada 002 para a chave 'PRIMARY'

c) Código do erro: 1136.  A contagem de colunas não corresponde a contagem de valores na linha 1
Correção: 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) Código de erro: 1364. O campo 'name' não possui um valor padrão
Correção:
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "004",
  "Antonio Fagundes", 
  400000,
  "1949-04-18", 
  "male"
);

e) Código de erro: 1292. Valor de data incorreto : '1950' para a coluna 'birth_data' na linha 1
Correção: 
INSERT INTO Actor (id, name, salary, birth_data, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

#### Exercicio 3 
a) SELECT * from Actor where gender = "female";
b) SELECT salary from Actor where name = "Tony Ramos";
c) SELECT * FROM Actor WHERE gender = "invalid". O resultado veio como todos os campos nulos. 
d) SELECT id, name, salary from Actor where salary < 500000;
e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
Correção: SELECT id, name from Actor WHERE id = "002"

#### Exercicio 4 
a) Selecione todos de Actor que o nome comece com A ou J e possua o salário maior que 300 mil.
b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
d) SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 and 900000;

#### Exercicio 5 
a) A query cria a tabela de movies, com id que é uma string e a primay key, nome que também será string, sipnose que é um texto e não pode ser nulo, a data de lançamento do filme no formato Date(yyyy-mm-dd) e avaliação que é um numero. 

#### Exercicio 6 
a) SELECT id, name, rating FROM Movie WHERE id = "001";
b) SELECT * FROM Movie WHERE name = "Se Eu Fosse Você";
c) SELECT id, name, sipnose FROM Movie WHERE rating >= 7;

#### Exercicio 7
a) SELECT * FROM Movie WHERE name LIKE "%vida%";
b) SELECT * FROM Movie WHERE name LIKE "%Deus%" OR sipnose LIKE "%Deus%";
c) SELECT * FROM Movie WHERE release_date < "2020-05-04";
d) SELECT * FROM Movie WHERE release_date < "2020-05-04" AND (name LIKE "%Deus%" OR sipnose LIKE "%Deus%") AND rating >= 7; 
OU
SELECT * FROM Movie WHERE release_date < curdate() AND (name LIKE "%Deus%" OR sipnose LIKE "%Deus%") AND rating >= 7;







