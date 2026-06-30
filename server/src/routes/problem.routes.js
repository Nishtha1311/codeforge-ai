import express from "express";

import {
  getAllProblems,
  getSingleProblem,
} from "../controllers/problem.controller.js";

const router = express.Router();

router.get("/", getAllProblems);

router.get("/:slug", getSingleProblem);

export default router;