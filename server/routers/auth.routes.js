import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();
// sign-up
router.post("/signup", signup);
//  login
router.post("/login", login);
// logout
router.post("/logout", logout);

export default router;
