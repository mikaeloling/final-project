import { UserModel } from "../models/UserModel";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerUserController = asyncHandler (async(req, res) => {
  const { username, password, email } = req.body;
  
  try {
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(password, salt);
  
  const newUser = new UserModel({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({
    sucess: true,
    response: {
      username: newUser.username,
      email: newUser.email,
      id: newUser._id,
      accessToken: generateToken(newUser._id),
    },
  });
} catch (error) {
  res.status(500).json({ sucess:false , response : error.message });

}
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

};

export const loginUserController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne ({ username });
    if (!user) {
      return res 
      .status(401)
      .json({ sucess: false, response: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
      .status(401)
      .json({ sucess: false, response: "Incorrect password" });
    }

    res.status(200).json({
      sucess: true,
      response: {
        username: user.username,
        email: user.email,
        id: user._id,
        accessToken: generateToken(user._id),
      },
    });
  } catch (error) { res.status(500).json({ sucess:false , response : error.message });
  }
}
);
