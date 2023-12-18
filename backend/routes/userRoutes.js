import express from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/auth"; 

const router = express.Router();
router.post("/register", registerUserController); 

router.post("/login", loginUserController);
export default router;
