import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();
router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);
export default router;
