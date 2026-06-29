import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

export const registerUserService = async ({
  fullName,
  username,
  email,
  password,
}) => {
  if (!fullName || !username || !email || !password) {
    throw new ApiError(400, "All fields are required.");
  }

  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new ApiError(409, "Email already exists.");
  }

  const existingUsername = await User.findOne({ username });

  if (existingUsername) {
    throw new ApiError(409, "Username already exists.");
  }

  const user = await User.create({
    fullName,
    username,
    email,
    password,
  });

  return {
    id: user._id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
  };
};