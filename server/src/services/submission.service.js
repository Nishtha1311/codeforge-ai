import Submission from "../models/submission.model.js";

export const createSubmission = async (submissionData) => {
  return await Submission.create(submissionData);
};

export const getUserSubmissions = async (userId) => {
  return await Submission.find({ user: userId })
    .populate("problem", "title difficulty slug")
    .sort({ createdAt: -1 });
};