import express from "express";

import { executeCode } from "../controllers/code.controller.js";

const router = express.Router();

router.post("/run", executeCode);

export default router;