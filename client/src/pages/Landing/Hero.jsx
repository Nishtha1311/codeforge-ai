import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import DashboardPreview from "./DashboardPreview";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#09090B] pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300"
        >
          🚀 AI Powered Coding Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-4xl text-6xl font-extrabold leading-tight text-white"
        >
          Master Coding
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Interviews
          </span>
          <br />
          with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Practice coding with AI-powered hints, online code execution,
          personalized feedback, coding contests and analytics that help you
          become interview ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex gap-5"
        >
         <Button
  size="lg"
  onClick={() => navigate("/register")}
>
  Get Started
</Button>

<Button
  size="lg"
  variant="outline"
  onClick={() => navigate("/login")}
>
  Login
</Button>
        </motion.div>

        <DashboardPreview />

      </div>
    </section>
  );
};

export default Hero;