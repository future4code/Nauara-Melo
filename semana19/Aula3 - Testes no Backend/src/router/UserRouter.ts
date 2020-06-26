import express from "express";
import { UserController } from "../controller/UserController";


export const userRouter = express.Router();

userRouter.get("/profile/:id", new UserController().getUserById);
userRouter.get("/all", new UserController().getAllUsers);
userRouter.post("/signup", new UserController().signup);
userRouter.post("/login", new UserController().login);

