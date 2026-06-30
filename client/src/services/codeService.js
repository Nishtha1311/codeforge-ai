import axios from "axios";

const API = "http://localhost:5000/api";

export const runCode = async (sourceCode) => {
  const response = await axios.post(`${API}/code/run`, {
    sourceCode,
  });

  return response.data.data;
};