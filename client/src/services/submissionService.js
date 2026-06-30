import api from "./api";

export const submitSolution = async ({ problemId, code }) => {
  const response = await api.post("/submissions", {
    problemId,
    code,
  });

  return response.data;
};

export const getMySubmissions = async () => {
  const response = await api.get("/submissions/me");

  return response.data;
};