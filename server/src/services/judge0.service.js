import axios from "axios";

const BASE_URL = "https://ce.judge0.com";

export const runCode = async (sourceCode) => {
  try {
    const submission = await axios.post(
      `${BASE_URL}/submissions?base64_encoded=false&wait=true`,
      {
        source_code: sourceCode,
        language_id: 63,
        stdin: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return submission.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
    throw error;
  }
};