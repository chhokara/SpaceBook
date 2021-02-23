import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
