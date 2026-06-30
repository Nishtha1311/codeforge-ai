import Problem from "../models/problem.model.js";

import {
  createSubmission,
  getUserSubmissions,
} from "../services/submission.service.js";

import { evaluateSubmission } from "../services/evaluation.service.js";

export const submitSolution = async (req, res) => {

  try {

    const { problemId, code } = req.body;

    if (!problemId || !code) {

      return res.status(400).json({
        success: false,
        message: "Problem ID and code are required.",
      });

    }

    const problem = await Problem.findById(problemId).select(
      "+hiddenTestCases"
    );

    if (!problem) {

      return res.status(404).json({
        success: false,
        message: "Problem not found.",
      });

    }

    const evaluation = await evaluateSubmission(
      code,
      problem.functionName,
      problem.hiddenTestCases
    );

    const submission = await createSubmission({

      user: req.user._id,

      problem: problem._id,

      language: "javascript",

      code,

      status: evaluation.status,

      executionTime: evaluation.executionTime,

      memory: evaluation.memory,

      passedTestCases: evaluation.passed,

      totalTestCases: evaluation.total,

      output: evaluation.output,

    });

    return res.status(201).json({

      success: true,

      message: "Submission completed.",

      data: submission,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

export const getMySubmissions = async (req, res) => {

  try {

    const submissions = await getUserSubmissions(req.user._id);

    res.status(200).json({

      success: true,

      data: submissions,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};