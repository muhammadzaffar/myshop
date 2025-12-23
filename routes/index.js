import express from "express";
import isLoggedIn from "../middlewares/islogedin.js";

const router = express.Router();

// Home page
router.get("/", (req, res) => {
  const error = req.flash("error");
  const success = req.flash("success");

  res.render("index.ejs", {
    error,
    success
  });
});

// Protected shop page
router.get("/shop", isLoggedIn, (req, res) => {
  res.render("shop");
});

export default router;
