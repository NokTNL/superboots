import express from "express";
import AboutPage from "../views/pages/about.js";

const router = express.Router();

router.get("/about", (req, res, next) => {
  res.send(AboutPage());
});

export default router;
