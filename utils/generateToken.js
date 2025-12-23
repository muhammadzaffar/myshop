// utils/generateToken.js
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret_key";

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, JWT_SECRET, { expiresIn: "1d" });
};
export default generateToken;
