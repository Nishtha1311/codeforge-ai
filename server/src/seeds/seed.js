import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Problem from "../models/problem.model.js";
import problems from "./problems.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    for (const problem of problems) {
      await Problem.findOneAndUpdate(
        { slug: problem.slug }, // Find by unique slug
        problem,                // Update with latest data
        {
          new: true,
          upsert: true,         // Create if not found
          runValidators: true,
        }
      );
    }

    console.log("✅ Problems Seeded Successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();