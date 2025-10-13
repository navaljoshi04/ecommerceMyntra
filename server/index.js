import express from "express";
import dotenv from "dotenv";
import { connectWithDataBase } from "./database/database.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT;
connectWithDataBase();

app.listen(PORT, () => {
  console.log("Starting the server on port :", PORT);
});
