import express from "express";
import {
  getHint,
  explainCode,
  findBugs
} from "../controllers/ai.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/hint", verifyJWT, getHint);

router.post("/explain", verifyJWT, explainCode);
router.post("/bugs", verifyJWT, findBugs);

export default router;