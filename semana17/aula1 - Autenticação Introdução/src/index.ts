import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/Authenticator";
import { UserDataBase } from "./data/UserDataBase";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
 

app.post("/signup", async (req: Request, res: Response) => {
  try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email Invalido");
    };

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha invalida.");
    };

    const userData = {
      email: req.body.email,
      password: req.body.password
    }; 

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDataBase();
    await userDb.createUser(id, userData.email, userData.password)

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
    }); 

    res.status(200).send({
      token: token,
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

//Testando função getUserByEmail
const userDb = new UserDataBase();
userDb.getUserByEmail("fulano@gmail.com").then(result => {
  console.log(result)
})

app.post("/login", async (req: Request, res: Response) => {
  try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email Invalido");
    };

    const userDataBase = {
      email: req.body.email,
      password: req.body.password
    }; 

    const userData = new UserDataBase();
    const user = await userData.getUserByEmail(userDataBase.email)

    if (!user) {
      throw new Error("Email Invalido")
    }

    if (userDataBase.password !== user.password) {
      throw new Error("Senha invalida.")
    } 

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
    });

    res.status(200).send({
      token: token,
    })
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})


app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.verify(token);

    const userDb = new UserDataBase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});