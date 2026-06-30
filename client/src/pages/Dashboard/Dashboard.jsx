import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import StatsCard from "../../components/dashboard/StatsCard";
import { getDashboardStats } from "../../services/dashboardService";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await getDashboardStats();
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return (
      <AppLayout>
        <h1 className="text-3xl font-bold">Loading Dashboard...</h1>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Welcome */}

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Track your coding progress and performance.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <StatsCard
          title="Total Problems"
          value={stats.totalProblems}
          color="text-cyan-400"
        />

        <StatsCard
          title="Solved Problems"
          value={stats.solvedProblems}
          color="text-green-400"
        />

        <StatsCard
          title="Accepted"
          value={stats.accepted}
          color="text-emerald-400"
        />

        <StatsCard
          title="Wrong Answers"
          value={stats.wrongAnswers}
          color="text-red-400"
        />

        <StatsCard
          title="Acceptance"
          value={`${stats.acceptanceRate}%`}
          color="text-yellow-400"
        />

      </div>

      {/* Summary */}

      <div className="mt-10 rounded-2xl bg-[#18181B] border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-4">
          📈 Performance Summary
        </h2>

        <div className="space-y-3 text-gray-300">

          <p>
            <span className="font-semibold text-white">
              Total Submissions:
            </span>{" "}
            {stats.totalSubmissions}
          </p>

          <p>
            <span className="font-semibold text-white">
              Accepted Solutions:
            </span>{" "}
            {stats.accepted}
          </p>

          <p>
            <span className="font-semibold text-white">
              Wrong Answers:
            </span>{" "}
            {stats.wrongAnswers}
          </p>

          <p>
            <span className="font-semibold text-white">
              Acceptance Rate:
            </span>{" "}
            {stats.acceptanceRate}%
          </p>

        </div>

      </div>
    </AppLayout>
  );
};

export default Dashboard;