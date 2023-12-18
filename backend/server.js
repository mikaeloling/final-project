import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
dotenv.config(); 
import router from "./routes/cafeRoutes"; 
import userRoutes from "./routes/userRoutes"; 
import { connectDB } from "./config/db"; 
// import authenticateUser from "./middleware/authenticateUser"; 

const port = process.env.PORT; 
const app = express(); 

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(router); 
app.use(userRoutes); 

connectDB();

// app.use(authenticateUser); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); 
});
