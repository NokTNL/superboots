import express from "express";
import IndexPage from "../views/pages/main.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(IndexPage());
});

export default router;
