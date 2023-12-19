import express from "express";
import { get } from "mongoose";
import { getCafesController } from "../controllers/cafes";

// const getCafeController = require('../controllers/cafes'); 

const router = express.Router();

router.get("/",
  (req, res) => {
    res.send("Welcome to the Cafe API!");
  }
);

router.get('/cafes', getCafesController);


router.get("/cafes/:id");
// router.post("/cafes", getCafeController.addCafeController);
// router.put("/cafes/:id", getCafeController.updateCafeController);
// router.delete("/cafes/:id", getCafeController.deleteCafeController);

export default router;
