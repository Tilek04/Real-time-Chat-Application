import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.routes.js";
import messageRoutes from "./routers/message.routes.js";
import userRoutes from "./routers/user.routes.js";



import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleware/protectRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);
app.use("/api/users", protectRoute, userRoutes);


// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on PORT ${PORT}`);
});
