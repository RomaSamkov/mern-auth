import { User } from "../models/user.js";

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

    const user = await User.create({ name, email, password });
    return res.json(user);
  } catch (error) {
    console.log("Error in registerUser controller");
    res.json({
      error: error,
    });
  }
};
