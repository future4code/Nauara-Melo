export const stringCompressor = (source: string) => {
    let output = '';

    let counterChar = 0; 
    let charSaved = source[0];

    for (let char of source) {

        if (char !== charSaved) {
            output += `${charSaved}${counterChar}`
            charSaved = char
            counterChar = 0
        }

        counterChar++;
    }

    output += `${charSaved}${counterChar}`

    return output.length > source.length ? source : output
}