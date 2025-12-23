import express from "express";
import ownerRoute from "./routes/ownersRouter.js";
import productRoute from "./routes/productsRouter.js";
import userRoute from "./routes/usersRouter.js";
import connectDB from "./config/mongoose_connection.js";

const app = express();

// Connect to MongoDB before starting server
await connectDB(); // اگر top-level await supported نہیں تو async function میں wrap کریں

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/owners", ownerRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
