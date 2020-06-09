let data = ""

export function executeA(data: string): any {
    let firstCharacter = data[0]
    let lastCharacter = data[data.length - 1] 
    let howManyCharacters = data.length

    return {
        howManyCharacters,
        firstCharacter,
        lastCharacter
    }
}


export function executeB(data: string): any {
    const result = [data.split('')]

    return result
}
