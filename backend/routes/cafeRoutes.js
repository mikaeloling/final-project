import express from "express";
import { getCafesController, getCafeByIdController, addCafeController, updateCafeController, deleteCafeController } from "../controllers/cafes";
import authenticateUser from "../middleware/authenticateUser";


const cafeRouter = express.Router();

cafeRouter.get("/",
  (req, res) => {
    res.json({ message: "Welcome to the Coffee API!" });

  }
);

cafeRouter.get("/cafes", getCafesController);
cafeRouter.get("/cafes/:id", getCafeByIdController);
cafeRouter.post("/cafes", authenticateUser, addCafeController);
cafeRouter.put("/cafes/:id", authenticateUser, updateCafeController);
cafeRouter.delete("/cafes/:id", authenticateUser, deleteCafeController);

export default cafeRouter;
