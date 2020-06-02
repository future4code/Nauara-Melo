import { Person } from "../src/exercicio1";
import { performAttack } from "../src/exercicio3";


test("Should returnerror 'Invalid Person', () => {

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