function somar(num1, num2) {
    return num1 + num2;
}
function subtrair(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function verificarMaiorNumero(num1, num2) {
    if (num1 < num2) {
        return num2;
    }
    return num1;
}
function executar(num1, num2) {
    console.log(`A soma do número ${num1} mais o número ${num2} é igual a ${somar(num1, num2)}`);
    console.log(`A subtração do número ${num1} com o número ${num2} é igual a ${subtrair(num1, num2)}`);
    console.log(`A multiplicação do número ${num1} com o ${num2} é igual a ${multiplicar(num1, num2)}`);
    console.log(`O maior número entre o ${num1} e o ${num2} é o número ${verificarMaiorNumero(num1, num2)}`);
}
executar(12, 34);
//# sourceMappingURL=exercicio1.js.map