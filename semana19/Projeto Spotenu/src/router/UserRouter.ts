import express from "express";
import { UserController } from "../controller/UserController";
import { BandController } from "../controller/BandController";
import { User } from "../model/User";

export const userRouter = express.Router();

userRouter.post("/signup-listener", new UserController().signupListener);
userRouter.post("/signup-admin", new UserController().signupAdmin);
userRouter.post("/signup-band", new UserController().signupUserBand);
userRouter.post("/login", new UserController().login);
//transferir para Router band

