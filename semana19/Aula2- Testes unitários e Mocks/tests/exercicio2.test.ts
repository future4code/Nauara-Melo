import { validateCharacter, Person} from "../src/exercicio1"

describe("Testing validateCharacter", () => {
    //a
    test("Should return false for name empty", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            defense: 200,
            force: 500
        })

        expect(result).toBe(false)
    })

    //b
    test("Should return false for life empty", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: undefined as any,
            defense: 200,
            force: 500
        })

        expect(result).toBe(false)
    })

    //c
    test("Should return false for force empty", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: 1500,
            defense: 200,
            force: undefined as any
        })

        expect(result).toBe(false)
    })

    //d
    test("Should return false for defense empty", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: 1500,
            defense: undefined as any,
            force: 500
        })

        expect(result).toBe(false)
    })

    //e
    test("Should return false for negative number", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: -1,
            defense: 500,
            force: 500
        })

        expect(result).toBe(false)
    })
    
    //f
    test("Should return true for number 0", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: 0,
            defense: 500,
            force: 500
        })

        expect(result).toBe(true)
    })

    //g
    test("Should return true for all valids inputs", () => {
        const result = validateCharacter({
            name: "Abreu",
            life: 1500,
            defense: 500,
            force: 500
        })

        expect(result).toBe(true)
    })

}) 