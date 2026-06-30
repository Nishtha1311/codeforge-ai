import Problem from "../models/problem.model.js";

export const getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find().select(
      "title slug difficulty tags acceptanceRate likes"
    );

    res.status(200).json({
      success: true,
      data: problems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleProblem = async (req, res) => {
  try {
    const problem = await Problem.findOne({
      slug: req.params.slug,
    });

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found",
      });
    }

    res.status(200).json({
      success: true,
      data: problem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};