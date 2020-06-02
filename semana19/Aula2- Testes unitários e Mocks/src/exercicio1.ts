
//a
export interface Person  {
    name: string,
    life: number, 
    defense: number,
    force: number
}

//b
export const validateCharacter = (input: Person): boolean => {

    if (input.life === undefined || input.force === undefined || input.defense === undefined || !input.name) {
        return false
    }

    if (input.life < 0 || input.force < 0 || input.defense < 0) {
        return false
    }

    return true
}