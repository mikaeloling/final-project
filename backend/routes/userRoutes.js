import express from "express";
import { loginUserController } from "../controllers/auth";

const userRouter = express.Router();

userRouter.post("/login", loginUserController);

export default userRouter;