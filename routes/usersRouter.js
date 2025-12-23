import express from "express";
import {registerUser,loginUser} from "../controllers/authControl.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("users route working");
});

// Register user route
router.post("/register", registerUser)
router.post("/login", loginUser)
export default router;
