import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole, User } from "../../src/model/User";

describe("Testing getAllUsers", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};    

    test("testing whether the error code is correct", async () => {
    expect.assertions(2);
    try {
        const getAllUsers = jest.fn();
        userDatabase = { getAllUsers }

        const userBusiness = new UserBusiness(
          userDatabase as any,
          hashGenerator as any,
          tokenGenerator as any,
          idGenerator as any
        );
  
        await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (err) {
        expect(err.errorCode).toBe(401);
        expect(err.message).toBe("Only administrators have access to this information"); 
    }
  })

  test("Should if the message is correct", async () => {
    const getAllUsers = jest.fn(() => new User(
        "id",
        "Bernadete",
        "bernadete@gmail.com",
        "123456",
        UserRole.ADMIN
        )
    );

    userDatabase = { getAllUsers }

    const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
    );

    const users = await userBusiness.getAllUsers(UserRole.ADMIN);
   
    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(users).toContain({id: "id", name: "Berdanete", password: "123456", role: UserRole.ADMIN}) 
})
  
})