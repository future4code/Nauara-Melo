export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}
  
export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}
  
export interface Casino {
    name: string;
    location: LOCATION;
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
interface ResultItem {
    allowed: string[];
    unallowed: string[];
}
 
export function verifyAge(casino: Casino, users: User[]): Result {
    const allowed: User[] = []
    const unallowed: User[] = []

    const minimumAge = casino.location === LOCATION.EUA ? 21 : 18
    
    for (let user of users) {
        if (user.age >= minimumAge) {
            allowed.push(user)
        } else {
            unallowed.push(user)
        }
    }

    return {
        brazilians: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN).map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN).map((user) => user.name)
        },
        americans: {
            allowed: allowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN).map((user) => user.name),
            unallowed: unallowed.filter((user) => user.nacionality === NACIONALITY.AMERICAN).map((user) => user.name)
        }
    }
}