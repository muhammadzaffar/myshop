import express from "express";
import ownerModel from "../models/owner-model.js"; // make sure this model exists
import bcrypt from "bcryptjs";

const router = express.Router();

// Test route
router.get("/", (req, res) => {
  res.send("owner route working");
});

// Register single owner route
router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if owner already exists
    const ownerCount = await ownerModel.countDocuments();
    if (ownerCount > 0) {
      return res.status(400).json({ error: "Owner already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the single owner
    const newOwner = await ownerModel.create({
      fullname,
      email,
      password: hashedPassword,
    });

    res.status(201).json(newOwner);
  } catch (error) {
    console.error("Error in /register route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
