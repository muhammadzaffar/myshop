import mongoose from "mongoose";
import config from "config";
import debugLib from "debug";

const debug = debugLib("development:mongoose");

const mongoURI = config.get("MONGO_URI"); // development.json میں URI ہونا چاہیے

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    debug("MongoDB connected successfully");
  } catch (err) {
    debug("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
