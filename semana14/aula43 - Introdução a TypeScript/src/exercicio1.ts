function somar(num1: number, num2: number): number {
    return num1 + num2
}

function subtrair(num1: number, num2: number): number {
    return num1 - num2
}

function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}

function verificarMaiorNumero(num1: number, num2: number): number {
    if (num1 < num2 ) {
        return num2
    } 

    return num1
}

function executar(num1: number, num2: number): void {
    console.log(`A soma do número ${num1} mais o número ${num2} é igual a ${somar(num1, num2)}`);
    console.log(`A subtração do número ${num1} com o número ${num2} é igual a ${subtrair(num1, num2)}`);
    console.log(`A multiplicação do número ${num1} com o ${num2} é igual a ${multiplicar(num1, num2)}`);
    console.log(`O maior número entre o ${num1} e o ${num2} é o número ${verificarMaiorNumero(num1, num2)}`);
}

executar(12, 34)
