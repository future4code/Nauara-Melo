import { verifyAge, NACIONALITY, LOCATION, User, Casino } from "../src/exercicio3" 

describe("Testing verifyAge", () => {
   test("Testing Brazilian user in a Brazilian establishment", () => {

        const brazilian: User = {
            name: "Astrogildo",
            age: 51,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Casino Brasileiro",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["Astrogildo"])
    }) 

    test("Testing American user in a Brazilian establishment", () => {

        const american: User = {
            name: "Paul",
            age: 30,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino Brasileiro", 
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])
        expect(result.americans.allowed).toEqual(["Paul"])
    }) 

    test("Testing users with age 19 years in American estabilishment", () => {

        const user1: User = {
            name: "Chandler",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user2: User = {
            name: "Joe",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user3: User = {
            name: "Monica", 
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const user4: User = {
            name: "Rachel",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [user1, user2, user3, user4])

        expect(result.americans.unallowed).toEqual(["Monica", "Rachel"])
        expect(result.brazilians.unallowed).toEqual(["Chandler", "Joe"]) 
    })


    test("Testing users in American estabilishment", () => {

        const user1: User = {
            name: "Chandler",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user2: User = {
            name: "Joe",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const user3: User = {
            name: "Monica", 
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const user4: User = {
            name: "Rachel",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Casino Americano",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [user1, user2, user3, user4])
        expect(result.brazilians.unallowed).toEqual(["Chandler", "Joe"]);
        expect(result.americans.allowed).toEqual(["Monica", "Rachel"])
    })
})