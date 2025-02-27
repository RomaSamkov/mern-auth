import express from "express";
import {
  getProfile,
  loginUser,
  registerUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello server app.");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

export default router;
