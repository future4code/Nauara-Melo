/*Exercícios de Interpretação de código

Exercício 1.a
[]

Exercício 1.b
(6) [0, 1, 0, 1, 2, 3]

Exercício 1.c
(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

Exercício 2.a
0
2
undefined. 

As saídas impressas no console se 
referem as posições dos elementos
Darvas(0) e João(2) no array, e o
elemento Paula não foi encontrado 
no arrayDeNomes. 

Exercício 2.b 
Funcionaria da mesma forma que
o array de string e ocorreria o 
mesmo erro caso o número não 
constasse no array. 

Exercicio 3
A função soma e multiplica valores, 
retornando um novo array com essas 
operações realizadas. 
Nome da função: somaEmultiplicacaoDeValores
*/

console.log("Exercicios de escrita de codigo")

console.log("Exercicio_4a")

const calcularIdadeDoCachorro = (anosHumano) => {
    const ANOS_CACHORRO = 7
    return anosHumano * ANOS_CACHORRO
}

console.log(calcularIdadeDoCachorro(2))
//Resultado = 14

console.log("Exercicio 4.b") 

function apresentacao (nome, idade, endereco, estudante) {
    const mensagem_estudante = 'sou estudante.'

    if (!estudante) {
        mensagem_estudante = 'não sou estudante.'
    }

    return "Eu sou " + nome + " moro em " + endereco + " e " +  mensagem_estudante

}

console.log(apresentacao('Nauara', 28, 'João Pessoa - PB', true)) 

console.log("Exercicio 6.a")

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//Deixei o mesmo array para todas as letras do exercicio 6

const quantidadeElementosArray = (array) => {
    return array.length
}

console.log(quantidadeElementosArray(array))


console.log("Exercicio 6.b")

 const verificaParidade = (numero) => {
    if (numero % 2 === 0) {
        return true
    }

    return false
}

console.log(verificaParidade(4)) 

console.log("Exercicio 6.c")

const quantidadeDeParesArray = (array) => {
    let contador_pares = 0

    for (elemento of array) {
        if (elemento % 2 === 0) {
            contador_pares++
        }
    }

    return contador_pares
}

console.log(quantidadeDeParesArray(array)) 

console.log("Exercicio 6.d")

const quantidadeDeParesNoArray = (array) => {
    let contador_pares = 0

    for (elemento of array) {
        if (verificaParidade(elemento)) {
            contador_pares++
        }
    }

    return contador_pares
}

console.log(quantidadeDeParesNoArray(array))
