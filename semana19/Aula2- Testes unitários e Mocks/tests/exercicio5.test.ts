import { Person } from "../src/exercicio1";
import { performAttack } from "../src/exercicio3";

//a
test("Testing performattack", () => {

    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Person = {
      name: "Abreu",
      life: 1500,
      defense: 400,
      force: 800,
    };

    const defender: Person = {
      name: "Lima",
      life: 1500,
      defense: 200,
      force: 600,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(900);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});

test("Testing performattack with invalid information ", () => {

    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Person = {
      name: "Abreu",
      life: 1500,
      defense: 300,
      force: 800,
    };

    const defender: Person = {
      name: "Lima",
      life: 1500,
      defense: 200,
      force: 600,
    };

    try {
        performAttack(attacker, defender, validatorMock as any); 
    } catch (error) {
        expect(error.message).toBe("Invalid Person");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }

});