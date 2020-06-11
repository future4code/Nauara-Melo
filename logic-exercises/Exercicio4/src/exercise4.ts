let data: string = ""

function isNumber(data: string): boolean {
    return !!Number(data);
}


//testing
console.log(isNumber("123"))
console.log(isNumber("12345"))