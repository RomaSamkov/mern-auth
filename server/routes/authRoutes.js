import express from "express";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello server app.");
});

router.post("/register", registerUser);

export default router;
