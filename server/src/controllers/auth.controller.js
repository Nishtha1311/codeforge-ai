import { registerUserService,loginUserService,getCurrentUserService } from "../services/auth.service.js";
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

export const loginUser = asyncHandler(async (req, res) => {
  const { user, accessToken } = await loginUserService(req.body);

  const options = {
    httpOnly: true,
    secure: false, // Change to true after deploying with HTTPS
    sameSite: "lax",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(200, "Login successful.", {
        user,
      })
    );
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await getCurrentUserService(req.user._id);

  return res.status(200).json(
    new ApiResponse(200, "Current user fetched successfully.", {
      user,
    })
  );
});