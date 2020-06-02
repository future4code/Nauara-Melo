import { Person } from "../src/exercicio1";
import { performAttack } from "../src/exercicio3";


test("Should return error 'Invalid Person'", () => {

    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Person = {
      name: "",
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

    try {
        performAttack(attacker, defender, validatorMock as any);
    } catch (error) {
        expect(error.message).toEqual("Invalid Person")
    }

});

test("Should return error 'Invalid Person' wiht life number negative", () => {

    const validatorMock = jest.fn(() => {
        return true;
    });
    
    const attacker: Person = {
        name: "Abreu",
        life: -1500,
        defense: 400,
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
        expect(error.message).toEqual("Invalid Person")
    }


});  

test("Showing toHaveBeenCalled", () => {
    
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
    expect(validatorMock).toHaveBeenCalled()
});

test("Showing toHaveBeenCalledWith", () => {
    
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
    expect(validatorMock).toHaveBeenCalledWith(attacker)
});

