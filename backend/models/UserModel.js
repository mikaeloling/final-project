import mongoose from "mongoose";
import crypto from "crypto";

const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    username: {
      type: String, 
      required: true,
      unique: true, 
      minlength: 2, 
    },
    password: {
      type: String, 
      required: true, 
      minlength: 6, 
    
    },
    email: {
      type: String,
      required: true,
      unique: true,
      },
    
    userRole: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    accessToken: {
      type: String, 
      default: () => crypto.randomBytes(128).toString("hex"), 
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", userSchema);