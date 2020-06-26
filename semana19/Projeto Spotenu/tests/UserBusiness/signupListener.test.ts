import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.signupListener", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'Missing input' for empty nickname", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signupListener("", "juju", "justina@gmail.com", "123456");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Missing input' for empty email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signupListener("Justina", "juju", "", "123456");
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Missing input");
    }
  });

  test("Should return 'Invalid email' for invalid email", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.signupListener(
        "Justina",
        "juju",
        "jujugmail.com",
        "123456"
      );
    } catch (err) {
      expect(err.errorCode).toBe(422);
      expect(err.message).toBe("Invalid email");
    }
  });

  
  test("Should return the accessToken in success", async () => {
    const generateId = jest.fn(() => "id");
    idGenerator = { generate: generateId };

    const hash = jest.fn(() => "hash");
    hashGenerator = { hash };

    const generateToken = jest.fn(() => "token");
    tokenGenerator = { generate: generateToken };

    const createUser = jest.fn((user: User) => {});
    userDatabase = { createUser };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.signupListener(
      "Justina",
      "juju",
      "justina@gmail.com",
      "123456"
    );

    expect(result.accessToken).toBe("token");
    expect(hash).toHaveBeenCalledWith("123456");
    expect(generateId).toHaveBeenCalledTimes(1);
    expect(generateToken).toHaveBeenCalledWith({ id: "id", role: "LISTENERNOPAYING" });
    expect(createUser).toHaveBeenCalledWith(
      new User(
        "id",
        "Justina",
        "juju",
        "justina@gmail.com",
        "hash",
        stringToUserRole("LISTENERNOPAYING")
      )
    );
  }); 
});
