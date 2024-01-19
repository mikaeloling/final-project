import express from "express"; 
import cors from "cors"; 
import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config(); 
import cafeRouter from "./routes/cafeRoutes"; 
import userRouter from "./routes/userRoutes";
import { connectDB } from "./config/db"; 




const port = process.env.PORT || 3000;
const app = express(); 

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cafeRouter); 
app.use('/login', userRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); 
});
