import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema(
  {
    input: String,
    output: String,
  },
  { _id: false }
);

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
    },

    functionName: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    tags: [String],

    description: String,

    examples: Array,

    constraints: [String],

    starterCode: {
      javascript: String,
    },

    sampleTestCases: {
      type: [testCaseSchema],
      default: [],
    },

    hiddenTestCases: {
      type: [testCaseSchema],
      default: [],
      select: false,
    },

    acceptanceRate: Number,

    likes: Number,

    dislikes: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Problem", problemSchema);