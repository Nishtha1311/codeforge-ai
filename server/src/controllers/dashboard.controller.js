import Submission from "../models/submission.model.js";
import Problem from "../models/problem.model.js";

export const getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalProblems = await Problem.countDocuments();

    const totalSubmissions = await Submission.countDocuments({
      user: userId,
    });

    const accepted = await Submission.countDocuments({
      user: userId,
      status: "Accepted",
    });

    const wrongAnswers = await Submission.countDocuments({
      user: userId,
      status: "Wrong Answer",
    });

    const solvedProblems = await Submission.distinct("problem", {
      user: userId,
      status: "Accepted",
    });

    const acceptanceRate =
      totalSubmissions === 0
        ? 0
        : Math.round((accepted / totalSubmissions) * 100);

    res.status(200).json({
      success: true,
      data: {
        totalProblems,
        solvedProblems: solvedProblems.length,
        totalSubmissions,
        accepted,
        wrongAnswers,
        acceptanceRate,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};