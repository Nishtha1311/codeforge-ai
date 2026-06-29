import { motion } from "framer-motion";
import { Brain, CheckCircle2, Flame, Trophy } from "lucide-react";

const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="relative mt-20 w-full max-w-6xl"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

          <h2 className="text-xl font-semibold text-white">
            CodeForge Dashboard
          </h2>

          <div className="flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-orange-300">

            <Flame size={18} />

            <span>28 Day Streak</span>

          </div>

        </div>

        {/* Body */}

        <div className="grid grid-cols-2 gap-6 p-8">

          {/* Left */}

          <div className="space-y-5">

            <div className="rounded-2xl bg-[#111827] p-5">

              <h3 className="mb-5 text-lg text-white">
                Problems Solved
              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Easy
                  </span>

                  <span className="text-green-400">
                    120
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Medium
                  </span>

                  <span className="text-yellow-400">
                    58
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Hard
                  </span>

                  <span className="text-red-400">
                    14
                  </span>

                </div>

              </div>

            </div>

            <div className="rounded-2xl bg-[#111827] p-5">

              <h3 className="mb-4 text-white">
                Recent Submission
              </h3>

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-white">
                    Two Sum
                  </p>

                  <p className="text-sm text-gray-400">
                    Runtime : 0 ms
                  </p>

                </div>

                <CheckCircle2
                  className="text-green-400"
                />

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 p-6">

              <div className="flex items-center gap-3">

                <Brain />

                <h3 className="text-xl font-semibold">
                  AI Assistant
                </h3>

              </div>

              <div className="mt-6 space-y-4">

                <div className="rounded-xl bg-white/10 p-4">

                  💡 Try Binary Search.

                </div>

                <div className="rounded-xl bg-white/10 p-4">

                  Time Complexity

                  <br />

                  <span className="font-bold">
                    O(log n)
                  </span>

                </div>

                <div className="rounded-xl bg-white/10 p-4">

                  Excellent Optimization ⭐

                </div>

              </div>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#111827] p-5">

              <div>

                <p className="text-gray-400">
                  Weekly Progress
                </p>

                <h2 className="text-2xl font-bold text-white">

                  +24%

                </h2>

              </div>

              <Trophy
                className="text-yellow-400"
                size={34}
              />

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default DashboardPreview;