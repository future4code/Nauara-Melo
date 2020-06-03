import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

    //a
    test("testing whether the error code is correct", async () => {
        expect.assertions(2);
        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
              userDatabase as any,
              hashGenerator as any,
              tokenGenerator as any,
              idGenerator as any
            );
      
            await userBusiness.getUserById("invalid");
        } catch (err) {
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found"); 
        }
    });

    test("Should if the message is correct", async () => {
        const getUserById = jest.fn((id: string) => new User(
            "id",
            "Bernadete",
            "bernadete@gmail.com",
            "123456",
            UserRole.NORMAL
            )
        );
        userDatabase = { getUserById }
    
        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getUserById("id");
       
        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({id: "id", name: "Bernadete", email: "bernadete@gmail.com", role: UserRole.NORMAL});  
    })
})