import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { fetchCurrentUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields.");
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", formData);

     toast.success(response.data.message);

await fetchCurrentUser();

navigate("/dashboard");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex">

      {/* Left */}

      <div className="hidden lg:flex w-1/2 flex-col justify-center px-20 bg-gradient-to-br from-indigo-600/20 via-transparent to-cyan-500/10">

        <h1 className="text-6xl font-bold text-white leading-tight">
          Welcome
          <br />
          Back
        </h1>

        <p className="mt-8 text-lg text-gray-400 leading-8 max-w-lg">
          Continue solving problems, improve your interview skills,
          and let AI guide your coding journey.
        </p>

      </div>

      {/* Right */}

      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

          <h2 className="text-4xl font-bold text-white">
            Login
          </h2>

          <p className="mt-2 text-gray-400">
            Welcome back to CodeForge AI.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

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
              placeholder="Enter your password"
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
                text-white
                font-semibold
                transition
                hover:scale-[1.02]
                disabled:opacity-50
              "
            >
              {loading ? "Logging In..." : "Login"}
            </button>

          </form>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 font-semibold hover:text-indigo-300"
            >
              Create Account
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;