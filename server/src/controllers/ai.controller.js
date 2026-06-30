import Problem from "../models/problem.model.js";
import { askAI } from "../services/ai.service.js";
import { prompts } from "../utils/promptTemplates.js";


export const getHint = async (req, res) => {
  try {
    const { problemId } = req.body;

    if (!problemId) {
      return res.status(400).json({
        success: false,
        message: "Problem ID is required.",
      });
    }

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found.",
      });
    }

    const prompt = prompts.hint(problem);

    const answer = await askAI(prompt);

    return res.status(200).json({
      success: true,
      message: "AI Hint generated successfully.",
      data: answer,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const explainCode = async (req, res) => {
  try {
    const { problemId, code } = req.body;

    if (!problemId || !code) {
      return res.status(400).json({
        success: false,
        message: "Problem ID and code are required.",
      });
    }

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found.",
      });
    }

    const prompt = prompts.explain(problem, code);

    const answer = await askAI(prompt);

    return res.status(200).json({
      success: true,
      message: "Explanation generated successfully.",
      data: answer,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const findBugs = async (req, res) => {
  try {
    const { problemId, code } = req.body;

    if (!problemId || !code) {
      return res.status(400).json({
        success: false,
        message: "Problem ID and code are required.",
      });
    }

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        success: false,
        message: "Problem not found.",
      });
    }

    const prompt = prompts.bugs(problem, code);

    const answer = await askAI(prompt);

    return res.status(200).json({
      success: true,
      message: "Bug analysis completed.",
      data: answer,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};