import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import api from "../../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    } = formData;

    if (
      !fullName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("Please fill all fields.");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/register", {
        fullName,
        username,
        email,
        password,
      });

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20 bg-gradient-to-br from-indigo-600/20 via-transparent to-cyan-500/10">

        <h1 className="text-6xl font-bold text-white leading-tight">
          Join
          <br />
          CodeForge AI
        </h1>

        <p className="mt-8 text-lg text-gray-400 max-w-lg leading-8">
          Practice coding, prepare for interviews, receive AI-powered hints,
          analyze your code, and become placement ready.
        </p>

      </div>

      {/* Right Side */}

      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <h2 className="text-4xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-gray-400">
            Start your coding journey today.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                py-3
                font-semibold
                text-white
                transition
                hover:scale-[1.02]
                disabled:opacity-50
              "
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;