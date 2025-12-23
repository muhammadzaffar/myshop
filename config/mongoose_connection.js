import mongoose from "mongoose";
import config from "config";  // <-- just import config

const connectDB = async () => {
  try {
    const mongoURI = config.get("MONGO_URI");  // reads JSON automatically
    await mongoose.connect(`${mongoURI}/ecommerce`, {
   
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

export default connectDB;
