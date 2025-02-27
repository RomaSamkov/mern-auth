import { comparePassword, hashPassword } from "../helpers/auth.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required.",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must be at least 6 characters long.",
      });
    }

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({
        error: "Email is already exist.",
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log("Error in registerUser controller");
    res.json({
      error: error,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found.",
      });
    }

    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }

    if (!match) {
      return res.json({
        error: "Wrong password.",
      });
    }
  } catch (error) {
    console.log("Error in loginUser controller");
    res.json({
      error: error,
    });
  }
};
