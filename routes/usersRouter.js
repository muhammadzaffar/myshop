import express from "express";
import authControl from "../controllers/authControl.js";


const router = express.Router();


router.get("/", (req, res) => {
  res.send("users route working");
});

// Register user route
router.post("/register", authControl)

export default router;
