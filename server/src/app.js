import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middleware/error.middleware.js";
import problemRoutes from "./routes/problem.routes.js";
import codeRoutes from "./routes/code.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/code", codeRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use(errorHandler);


// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CodeForge API is running 🚀",
  });
});

export default app;