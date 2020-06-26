import { verifyAge, NACIONALITY, LOCATION, User, Casino } from "../src/exercicio3" 

describe("Testing VerifyAge", () => {
    test("Testing  brazilian array length", () => {

        const brazilian: User = {
            name: "Astrogildo",
            age: 51,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Brazilian Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed.length).toBeLessThan(2);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    })

    test("Testing American array lenght", () => {
        
        const american: User = {
            name: "Paul",
            age: 30, 
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Brazilian Casino",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])
        expect(result.americans.unallowed.length).toBe(0)
    })

    test("Testing users with 19 years in american stabilishment", () => {
        
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
        expect(result.brazilians.unallowed).toContain("Chandler");
        expect(result.americans.unallowed).toContain("Monica")
    })


    test("Testing arrays lenght", () => {

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
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2)
    })
})