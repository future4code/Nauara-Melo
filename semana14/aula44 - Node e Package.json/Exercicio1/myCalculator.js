function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}


function executeOperation(operation, num1, num2) {

    if(operation === 'add') {
        return add(num1, num2)
    }

    if(operation === 'sub') {
        return sub(num1, num2)
    }

    if(operation === 'mult') {
        return mult(num1, num2)
    }

    return div(num1, num2)

}

function run() {

    const operation = process.argv[2]
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);

    const result = executeOperation(operation, num1, num2)

    console.log(`Resposta: ${result}`)
}

run()
