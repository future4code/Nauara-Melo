function contarNumerosImpares(numeros) {
    const numerosImpares = numeros.filter((numero) => {
        return numero % 2 !== 0;
    });
    return numerosImpares.length;
}
function somarElementos(numeros) {
    let somaElementos = 0;
    for (let numero of numeros) {
        somaElementos += numero;
    }
    return somaElementos;
}
function executarExercicio2(numeros) {
    const resultado = {
        quantidadeImpares: contarNumerosImpares(numeros),
        quantidadeTotalElementos: numeros.length,
        somaDeTodosElementos: somarElementos(numeros)
    };
    console.log(resultado);
}
executarExercicio2([5, 8, 10, 15, 28]);
//# sourceMappingURL=exercicio2.js.map