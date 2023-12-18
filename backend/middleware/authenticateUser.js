import { UserModel } from "../models/UserModel";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await UserModel.findOne({ accessToken: accessToken });
    if (user) {
      req.user = user; 
      next(); 
    } else {
      res.status(401).json({ success: false, response: "Please log in" });
    }
  } catch (e) {
    res.status(500).json({ success: false, response: e.message });
  }
};
export default authenticateUser;