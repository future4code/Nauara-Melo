const numbers = [2, 4, 6, 8]

const printNumbers = (numbers: number[], n: number = numbers.length - 1) => {
    
    if (n >=0) {
        printNumbers(numbers, n -1)
        console.log(n, numbers[n])
    }
    
}

printNumbers(numbers)