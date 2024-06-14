import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.js";
import connectToMongoDB from "../db/connectToMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}`);
});
