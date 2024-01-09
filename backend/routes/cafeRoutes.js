import express from "express";
// import { get } from "mongoose";
import { getCafesController, getCafeByIdController, addCafeController, updateCafeController, deleteCafeController } from "../controllers/cafes";
import authenticateUser from "../middleware/authenticateUser";


const router = express.Router();

router.get("/",
  (req, res) => {
    res.json({ message: "Welcome to the Coffee API!" });

  }
);

router.get("/cafes", getCafesController);
router.post("/cafes", authenticateUser, addCafeController);
router.put("/cafes/:id", authenticateUser, updateCafeController);
router.delete("/cafes/:id", authenticateUser, deleteCafeController);

export default router;
