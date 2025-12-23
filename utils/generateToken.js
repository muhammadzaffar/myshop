// utils/generateToken.js
import jwt from "jsonwebtoken";

const generateToken = (id, email) => {
  const JWT_SECRET = process.env.JWT_SECRET; 
  console.log("JWT Secret inside function:", JWT_SECRET); // just for debugging

  // Generate token
  const token = jwt.sign({ id, email }, JWT_SECRET, { expiresIn: "1d" });

  return token;
};

export default generateToken;
