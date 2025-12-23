import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import flash from "connect-flash";
import ownerRoute from "./routes/ownersRouter.js";
import indexRoute from "./routes/index.js"
import productRoute from "./routes/productsRouter.js";
import userRoute from "./routes/usersRouter.js";
import connectDB from "./config/mongoose_connection.js";
const app = express();
dotenv.config();
await connectDB(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
  })
);

app.set("views engine", "ejs");

app.use(flash());
app.use("/",indexRoute);
app.use("/owners", ownerRoute);
app.use("/products", productRoute);  
app.use("/users", userRoute);
app.listen(3000, () => {
  console.log("server started on port 3000");
});
