import express from "express";

import {
  submitSolution,
  getMySubmissions,
} from "../controllers/submission.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyJWT, submitSolution);

router.get("/me", verifyJWT, getMySubmissions);

export default router;