import { useAuth } from "../../context/AuthContext";
import {
  Flame,
  Trophy,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      {/* Navbar */}

      <header className="border-b border-white/10 bg-[#0F0F12]">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-2xl font-bold">
            CodeForge AI
          </h1>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center font-bold">
              {user?.fullName?.charAt(0)}
            </div>

            <div>
              <p className="font-semibold">{user?.fullName}</p>
              <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>

          </div>

        </div>

      </header>

      {/* Main */}

      <main className="max-w-7xl mx-auto px-8 py-10">

        {/* Welcome */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h2 className="text-5xl font-bold">
              Welcome back 👋
            </h2>

            <p className="mt-3 text-gray-400 text-lg">
              Ready to solve your next coding challenge?
            </p>

          </div>

          <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
            Solve Problems
          </button>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-2xl bg-[#15151A] p-6 border border-white/10">

            <CheckCircle className="text-green-400 mb-4" size={34} />

            <p className="text-gray-400">Problems Solved</p>

            <h3 className="text-4xl font-bold mt-2">0</h3>

          </div>

          <div className="rounded-2xl bg-[#15151A] p-6 border border-white/10">

            <Flame className="text-orange-400 mb-4" size={34} />

            <p className="text-gray-400">Current Streak</p>

            <h3 className="text-4xl font-bold mt-2">0</h3>

          </div>

          <div className="rounded-2xl bg-[#15151A] p-6 border border-white/10">

            <Brain className="text-indigo-400 mb-4" size={34} />

            <p className="text-gray-400">AI Sessions</p>

            <h3 className="text-4xl font-bold mt-2">0</h3>

          </div>

          <div className="rounded-2xl bg-[#15151A] p-6 border border-white/10">

            <Trophy className="text-yellow-400 mb-4" size={34} />

            <p className="text-gray-400">Contest Rating</p>

            <h3 className="text-4xl font-bold mt-2">1200</h3>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Recent */}

          <div className="rounded-2xl bg-[#15151A] border border-white/10 p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold">
                    No submissions yet
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Solve your first problem today.
                  </p>

                </div>

                <ArrowRight />

              </div>

            </div>

          </div>

          {/* AI */}

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-600 p-8">

            <h2 className="text-2xl font-bold">
              🤖 AI Coach
            </h2>

            <p className="mt-4 leading-8">

              Ask AI for:

              <br />

              • Hints

              <br />

              • Debugging

              <br />

              • Complexity Analysis

              <br />

              • Interview Preparation

            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Start AI Session
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;