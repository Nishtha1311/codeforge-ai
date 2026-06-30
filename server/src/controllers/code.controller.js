import { runCode } from "../services/judge0.service.js";

export const executeCode = async (req, res) => {
  try {
    const { sourceCode } = req.body;

    if (!sourceCode) {
      return res.status(400).json({
        success: false,
        message: "Source code is required.",
      });
    }

    const result = await runCode(sourceCode);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Execution failed.",
    });
  }
};