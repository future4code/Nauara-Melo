<!-- ## Exercicio 1

a) Sim, concordo e acho bem válido, uma vez que é mais seguro, pois permite um número maior de combinações na hora da criação do id, o que dificulta a descoberta do mesmo.

## Exercicio 2 

a) O código faz uma conexão com o banco através do knex, quando cria uma variavel connection e seta o client como mysql, pegando as chaves do arquivo .env. Também foi criada uma constante para criação de usuario, onde são passados o id, email e senha e o resultado é a criação do mesmo na tabela de usuários.


b) 
~~~
CREATE TABLE AuthenticationUser (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
); 
~~~

## Exercicio 3

a) O typescript não tem controle das informações das informações guardadas no arquivo .env, então como não tem o tipo, pode dar undefined, por isso, explicitamos que será "como uma string".

## Exercicio 4 

a)   
~~~
if (!req.body.email || req.body.email.indexOf("@") === -1) {
  throw new Error("Email Invalido");
  }
};
~~~

b)
~~~ 
if (!req.body.password || req.body.password.length < 6) {
  throw new Error("Senha invalida.");
  }
};
~~~

## Exercicio 5

b) 
~~~
const userDb = new UserDataBase();
userDb.getUserById("fulano@gmail.com").then(result => {
  console.log(result)
})
~~~

## Exercicio 6 

b)
~~~
if (!req.body.email || req.body.email.indexOf("@") === -1) {
    throw new Error("Email Invalido");
};
~~~

## Exercicio 7

a) Verifica se a função é valida e traz qualquer coisa que estiver no usuario. 

 -->