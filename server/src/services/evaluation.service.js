import { runCode } from "./judge0.service.js";

export const evaluateSubmission = async (
  code,
  functionName,
  hiddenTestCases
) => {
  let passed = 0;

  let status = "Accepted";

  let executionTime = 0;

  let memory = 0;

  let output = "";

  for (const testCase of hiddenTestCases) {

    const wrappedCode = `
${code}

const result = ${functionName}(${testCase.input});

console.log(JSON.stringify(result));
`;

    const judgeResult = await runCode(wrappedCode);

    executionTime += Number(judgeResult.time || 0);

    memory = Math.max(memory, Number(judgeResult.memory || 0));

    const actualOutput = (judgeResult.stdout || "").trim();

    const expectedOutput = testCase.output.trim();

    if (actualOutput !== expectedOutput) {

      status = "Wrong Answer";

      output = actualOutput;

      break;

    }

    passed++;

  }

  return {
    status,
    passed,
    total: hiddenTestCases.length,
    executionTime,
    memory,
    output,
  };
};