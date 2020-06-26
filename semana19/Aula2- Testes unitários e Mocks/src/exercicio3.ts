import {validateCharacter, Person} from "./exercicio1";

//a
/* export const performAttack = (attacker: Person, defender: Person) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid person");
    }
  
    if (attacker.force > defender.defense) {
      defender.life -= attacker.force - defender.defense;
    }
}; */

//b
export const performAttack = (attacker: Person, defender: Person, validator: (input: Person) => boolean) => {
    if(!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid Person")
    }

    if(attacker.force > defender.force) {
        defender.life -= attacker.force - defender.defense
    }
}