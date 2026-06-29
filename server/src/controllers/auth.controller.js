import { registerUserService } from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
  const user = await registerUserService(req.body);

  return res.status(201).json(
    new ApiResponse(
      201,
      "User registered successfully.",
      user
    )
  );
});