const numbers: number[] = []

function executeA(numbers: number[]): any {
    let sum: number = 0
    let multiply: number = 0

    for (let number of numbers) {
        sum += number
        multiply = multiply > 0 ? multiply * number : number
   }

   return {
        sum,
        multiply,
        length: numbers.length
   }
}

function executeB(numbers: number[]): any {
   let numberMax: number = numbers[0]
   let numberMin: number = numbers[0]

    for(let number of numbers) {
        if (number > numberMax) {
            numberMax = number
        }

        if (number < numberMin) {
            numberMin = number
        }
    }

    return {
        numberMax,
        numberMin
    }
}

console.log(executeA([1,3,5]))
console.log(executeB([5,10,15]))
