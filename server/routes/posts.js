import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It's WORKING!!");
});

export default router;
