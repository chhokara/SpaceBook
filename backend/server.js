import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { error } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);

app.use(error);

const PORT = process.env.PORT;

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
