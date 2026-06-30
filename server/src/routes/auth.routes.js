import express from "express";

import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser
} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyJWT, getCurrentUser);
router.post("/logout", logoutUser);
export default router;