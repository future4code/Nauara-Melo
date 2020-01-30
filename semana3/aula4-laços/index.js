//Exercicio de interpretação de código

/* Exercicio 1
Um soma, o código roda 14 vezes e faz uma soma. 
Exemplo: 
0 = 0 + 0
0 = 0 + 1
1 = 1 + 1
O resultado impresso no console é 105.  

Exercicio 2
a. Adiciona um  elemento no final do array
b. array(4)
c. Variável numero = 3: (6) [12, 15, 18, 21, 27, 30], variável numero = 4: [12]

Desafio
0
00
000
0000
 */

console.log('Exercicio de escrita de código')

console.log('Questão 3.a')

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = 0
let menor = 0

for (let i = 0; i < array.length; i++) {
    const elemento = array[i]

    if (i === 0) {
        menor = elemento
    }

    if (elemento > maior) {
        maior = elemento 
    }

    if (elemento < menor) {
        menor = elemento
    }
}

console.log('O maior número é ' + maior + ' e o menor é ' + menor) 

console.log('Exercicio 3.b')

const array10 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novoarray = []

for (let i = 0; i < array10.length; i++) {
    const elemento = array10[i]
    novoarray.push(elemento / 10)
} 

console.log(novoarray) 

console.log('Exercicio 3.c')

const array_pares = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const novo_array = []

for (let i = 0; i < array_pares.length; i++) {
    const elemento = array_pares[i]
    if (elemento % 2 ===0) {
        novo_array.push(elemento)
    }
}

console.log(novo_array) 


console.log('Exercicio 3.d')

const array_string = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const newarray = []

for (let i = 0; i < array_string.length; i++) {
    const elemento_numero = array_string[i]
    const mensagem = 'O elemento do índex ' + i + ' é ' + elemento_numero
    newarray.push(mensagem)
}

console.log(newarray)