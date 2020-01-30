/*Exercícios de interpretação de código
Exercicio 1 
O código tem como objetivo identificar o valor do resto da divisão, para os casos em que a divisão não dá um número inteiro, identificar se ele é par. Ele testa se o número inserido pelo usuário dividido por 2 é igual a zero. O código imprime no console “Passou no teste” para os números que divididos por 2 tem como resto da divisão o número 0 e imprime “Não passou no teste” para os números que ao serem divididos por 2 tem como resto da divisão um número diferente de zero. 

Exercicio 2 
a.	Para identificar o valor das frutas de um supermercado.  	
b.	O preço da fruta maçã é R$ 2,25.
c.	R$ 24,55
d.	O preço da fruta  pêra  é  R$  5.

Exercicio 3 
Mensagem is not defined. Sim, haverá erro, devido ao escopo pai não ter acesso as variáveis do escopo filho. */

console.log('Exercícios de escrita de código')

console.log('Exercicio 4.a')

const num1 = prompt('Digite o primeiro número')
const num2 = prompt('Digite o segundo número')

if (num1 > num2) {
    console.log(num2 + ' , ' + num1)
} else if(num2 > num1) {
    console.log(num1 + ' , ' + num2)
    } 
// O console imprimirá os dois números (2,2) 

console.log('Questão 4.b') 

const num1 = Number(prompt('Digite o primeiro número'))
const num2 = Number(prompt('Digite o segundo número'))
const num3 = Number(prompt('Digite o terceiro número'))

if (num1 > num2) {
    if (num2 > num3) {
        console.log(num1 + ' , ' + num2 + ' , ' + num3)
    } else {
        if (num1 > num3) {
            console.log(num1 + ' , ' + num3 + ' , ' + num2)
        } else {
            console.log(num3 + ' , ' + num1 + ' , ' + num2)
        }
    }
} else {
    if (num2 > num3) {
        if (num3 > num1) {
            console.log(num2 + " , " + num3 + ' , ' + num1)
        } else {
            console.log(num2 + " , " + num1 + ' , ' + num3)
        }
    }

    if (num2 < num3) {
        if (num2 > num1) {
            console.log(num3 + " , " + num2 + ' , ' + num1)
        } else {
            console.log(num3 + " , " + num1 + ' , ' + num2)
        }

    }
} 

console.log('Questão 4.c')

const num1 = Number(prompt('Digite o primeiro número'))
const num2 = Number(prompt('Digite o segundo número'))
const num3 = Number(prompt('Digite o terceiro número'))

if (num1 === num2 && num2 === num3) {
    console.log('Por favor colocar números diferentes.')
} else {
    if (num1 > num2) {
        if (num2 > num3) {
            console.log(num1 + ' , ' + num2 + ' , ' + num3)
        } else {
            if (num1 > num3) {
                console.log(num1 + ' , ' + num3 + ' , ' + num2)
            } else {
                console.log(num3 + ' , ' + num1 + ' , ' + num2)
            }
        }
    } else {
        if (num2 > num3) {
            if (num3 > num1) {
                console.log(num2 + " , " + num3 + ' , ' + num1)
            } else {
                console.log(num2 + " , " + num1 + ' , ' + num3)
            }
        }
    
        if (num2 < num3) {
            if (num2 > num1) {
                console.log(num3 + " , " + num2 + ' , ' + num1)
            } else {
                console.log(num3 + " , " + num1 + ' , ' + num2)
            }
    
        }
    }
}