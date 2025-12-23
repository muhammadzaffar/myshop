import userModel from "../models/user-model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

 const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      fullname,
      email,
      password: hashedPassword
    });

    const token = generateToken(newUser);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost ke liye
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default register;