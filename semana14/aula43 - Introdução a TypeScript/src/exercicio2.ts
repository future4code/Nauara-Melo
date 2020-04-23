function contarNumerosImpares(numeros: number[]): number {
    const numerosImpares: number[] = numeros.filter((numero: number) => { 
        return numero % 2 !== 0
    })

    return numerosImpares.length
}

function somarElementos(numeros: number[]): number {
    let somaElementos: number = 0

    for (let numero of numeros) {
        somaElementos += numero
    }

    return somaElementos
}

function executarExercicio2(numeros: number[]): void {
    
    type resultadoNumeros = {
        quantidadeTotalElementos: number,
        quantidadeImpares: number,
        somaDeTodosElementos: number
    }

    const resultado: resultadoNumeros = {
        quantidadeImpares: contarNumerosImpares(numeros),
        quantidadeTotalElementos: numeros.length,
        somaDeTodosElementos: somarElementos(numeros)
    }

    console.log(resultado)

}

executarExercicio2([5, 8, 10, 15, 28])

