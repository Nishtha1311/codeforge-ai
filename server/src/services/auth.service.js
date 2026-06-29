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

export const loginUserService = async ({ email, password }) => {
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required.");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const accessToken = user.generateAccessToken();

  return {
    user: {
      id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    accessToken,
  };
};

export const getCurrentUserService = async (userId) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  return user;
};