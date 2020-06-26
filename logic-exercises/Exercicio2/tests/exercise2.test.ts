import { executeA, executeB } from "../src/exercise2"

describe("Testing executeA", () => {
    test("testing exercise 1", () => {
        let teste = "acordeon"

        const result = executeA(teste)

        expect(result.howManyCharacters).toBe(teste.length);
        expect(result.firstCharacter).toBe("a");
        expect(result.lastCharacter).toBe("n") 
    })
})

describe("Testing executeB", () => {
    test("Testing exercise 2", () => {
        let teste = "sanfona"
        const expected = ["s", "a", "n", "f", "o", "n", "a"]

        const result = executeB(teste)

        expect(["s", "a", "n", "f", "o", "n", "a", "b", "r"]).toEqual(expect.arrayContaining(expected))
        expect(result).toEqual(expect.not.arrayContaining(expected)) 
    })
}) 