import express from "express";
import userModel from "../models/user-model.js";
import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken.js";

const router = express.Router();

// JWT secret (in production, store in .env)
const JWT_SECRET = process.env.JWT_SECRET;  
console.log(JWT_SECRET);

// Test route
router.get("/", (req, res) => {
  res.send("users route working");
});

// Register user route
router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await userModel.create({
      fullname,
      email,
      password: hashedPassword
    });

    const token= generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: { fullname: newUser.fullname, email: newUser.email },
      token
    });

  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});





export default router;
