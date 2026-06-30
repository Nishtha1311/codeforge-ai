import api from "./api";

export const getAIHint = async (problemId) => {
  const response = await api.post("/ai/hint", {
    problemId,
  });

  return response.data;
};

export const explainCode = async (problemId, code) => {
  const response = await api.post("/ai/explain", {
    problemId,
    code,
  });

  return response.data;
};

export const findBugs = async (problemId, code) => {
  const response = await api.post("/ai/bugs", {
    problemId,
    code,
  });

  return response.data;
};