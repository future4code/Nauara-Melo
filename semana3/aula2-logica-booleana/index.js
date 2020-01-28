/*
//Exercicio de interpretação

//Questão 1 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//false

console.log("e. ", typeof resultado)
/* boolean

/*Questão 2 
a. Arrays são maneiras de se guardar e acessar mais de uma informação 
ao mesmo tempo. 
array [1, 2, 3]

b. 
let array
console.log('X. ', array)

c. 
array.lenght

d. 
I.  undefined
index.js:33 II.  null
index.js:37 III.  11
index.js:40 IV.  3  e  4
index.js:44 V.  19  e  9
index.js:48 VI.  3
index.js:53 VII.  1
index.html:39 
*/

//Exercicios de escrita

console.log('Questão 1.a')
// Formula => (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
const GRAUS_FAHRENHEIT = 77
const kelvin = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
console.log(GRAUS_FAHRENHEIT + 'ºF convertido em Kelvin: ', kelvin)

console.log('Questão 1.b')
//formula => (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32
const GRAUS_CELSIUS = 80
const fahrenheit = (GRAUS_CELSIUS)*9/5 + 32
console.log(GRAUS_CELSIUS + 'ºC convertido em fahrenheit: ', fahrenheit)

console.log('Questão 1.c')
const CELSIUS = 30
const fahrenheit_celsius = (CELSIUS)*9/5 + 32
const kelvin_fahrenheit = (fahrenheit_celsius - 32)*5/9 + 273.15
console.log(CELSIUS + 'ºC convertido em fahrenheit:', fahrenheit_celsius + 'ºF ' + CELSIUS +'ºC convertido em kelvin' , kelvin_fahrenheit + 'K')

console.log('Questão 1.d')
const celsius = prompt('Insira o valor em graus celsius para ser convertido em ºF e K')
const fahrenheitCelsius = (celsius)*9/5 + 32
const kelvinFahrenheit = (fahrenheitCelsius - 32)*5/9 + 273.15
console.log(celsius + 'ºC convertido em fahrenheit:', fahrenheitCelsius + 'ºF ' + celsius +'ºC convertido em kelvin' , kelvinFahrenheit + 'K')

console.log('Questão 2')

const nome = prompt('1. Qual o seu nome?')
console.log('1. Qual o seu nome?')
console.log('Resposta:' , nome)

const idade = prompt('2. Qual a sua idade?')
console.log('2. Qual a sua idade?')
console.log('Resposta: ', idade)

const endereco = prompt('3. Onde você mora?')
console.log('3. Onde você mora?')
console.log('Resposta: ', endereco)

const time = prompt('4. Qual o seu time?')
console.log('4. Qual o seu time?')
console.log('Resposta: ', time)

const cor = prompt('5. Qual a sua cor preferida?')
console.log('5. Qual a sua cor preferida?')
console.log('Resposta: ', cor)


console.log('Questão 3.a')
const QWH = 0.05
const CONSUMO_RESIDENCIA = 280
const valor_total_residencia = QWH * CONSUMO_RESIDENCIA
console.log('Valor total que devera será pago por uma unidade que consuma 280 quilowatt-hora será no valor de: R$', valor_total_residencia)

console.log('Questão 3.b')
const porcentagem_desconto = 0.15
const valor_total_desconto = valor_total_residencia - (valor_total_residencia * porcentagem_desconto)
console.log('Com o valor de desconto de 15%, o valor a ser pago será de: R$', valor_total_desconto)




