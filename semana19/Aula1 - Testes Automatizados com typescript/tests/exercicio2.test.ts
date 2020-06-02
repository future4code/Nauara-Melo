import { performPurchase } from "../src/exercicio1";

describe("Testing performPurchase", () => {
    test("testing a user with a balance greater than the purchase valor", () => {
        const user = {
            name: "Bartolomeu", 
            balance: 200
        }

        const xxx = performPurchase(user, 100)

        expect(xxx).toEqual({
            ...user,
            balance: 100
        })
    })

    test("testing a user with a balance equal the purchase valor", () => {
        const user = {
            name: "Alfredo",
            balance: 100
        }

        const xxx = performPurchase(user, 100)

        expect(xxx).toEqual({
            ...user,
            balance: 0
        })
    })

    test("testing a user with a balance less than the purchase valor", () => {
        const user = {
            name: "Josefina",
            balance: 100
        }

        const xxx = performPurchase(user, 200)

        expect(xxx).toEqual(undefined)
    })
})

