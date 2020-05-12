<!-- ## Exercicio 1

a) Salt é uma string aleatória adicionada na senha (ou texto) antes de criar o hash e round é um fator numérico que está relacionado à segurança da senha,  quanto maior o cost maior o tempo de execução do algoritmo. Os valores são recomendados para o round de acordo com o sistema e a recomendação é utilizar o maior que conseguir para os equipamentos
utilizados rodarem no tempo desejado. Utilizei um round de 12, por ser o padrão na maioria das libs.


## Exercicio 2 

a) Signup, porque a senha é gerada no signup. 


d) Não precisamos modificar o endpoint user/profile, porque para chegar nesse passo precisamos estar logados, verificados. 

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