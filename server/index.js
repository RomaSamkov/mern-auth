import express from "express";
import dotenv from "dotenv";
import authRotes from "./routes/authRoutes.js";
import cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/", authRotes);
app.listen(port, () => console.log(`Server is running on port ${port}`));
