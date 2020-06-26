import { executeA, executeB } from "../src/exercise3";

describe("Testing function executeA", () => {
    test("Should return true for the same words", () => {
        let test1: string = "escola"
        let test2: string = "escola"

        const result = executeA(test1, test2)

        expect(result).toBe(true)
    })

    test("Should return false for the differents words", () => {
        let test1: string = "escola"
        let test2: string = "Escola"

        const result = executeA(test1, test2)

        expect(result).toBe(false)
    })
})

describe("Testing executeB", () => {
    test("Should return true for the different written words", () => {
        let test1: string = "escola"
        let test2: string = "Escola"

        const result = executeB(test1, test2)

        expect(result).toBe(true)

    })

    test("Should return false for the different words", () => {
        let test1: string = "escola"
        let test2: string = "casa"

        const result = executeB(test1, test2)

        expect(result).toBe(false)
    })
})