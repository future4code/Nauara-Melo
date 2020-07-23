const sumNumbers = (a: number, b: number = 0): number => {
    if(a === 0) {
        return b;
    }

    return sumNumbers(a - 1, b + a);
};

console.log(sumNumbers(2))
console.log(sumNumbers(3)) 
console.log(sumNumbers(4))
console.log(sumNumbers(0))