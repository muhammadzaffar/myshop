import express from "express";
import { registerUser, loginUser } from "../controllers/authControl.js";

const router = express.Router();

// Test route to check if users route is working
router.get("/", (req, res) => {
  res.send("Users route working");
});

// Register user route
router.post("/register", registerUser);

// Login user route
router.post("/login", loginUser);

export default router;
