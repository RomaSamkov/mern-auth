import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello server app.");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
