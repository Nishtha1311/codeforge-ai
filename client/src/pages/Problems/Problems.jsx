import { useEffect, useMemo, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await api.get("/problems");
      setProblems(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch = problem.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        problem.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [problems, search, difficulty]);

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Problems
        </h1>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search Problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#16161A] border border-white/10 rounded-xl px-4 py-2 outline-none w-72"
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="bg-[#16161A] border border-white/10 rounded-xl px-4"
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

        </div>

      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="rounded-2xl border border-white/10 overflow-hidden">

          <table className="w-full">

            <thead className="bg-[#15151A]">

              <tr>

                <th className="text-left px-6 py-5">Title</th>

                <th className="text-left px-6 py-5">Difficulty</th>

                <th className="text-left px-6 py-5">Acceptance</th>

                <th className="text-left px-6 py-5">Likes</th>

                <th className="text-left px-6 py-5">Tags</th>

              </tr>

            </thead>

            <tbody>

              {filteredProblems.map((problem) => (

               <tr
  onClick={() => navigate(`/problems/${problem.slug}`)}
  key={problem._id}
  className="border-t border-white/10 hover:bg-white/5 cursor-pointer transition"
>

                  <td className="px-6 py-5 font-semibold">
                    {problem.title}
                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        problem.difficulty === "Easy"
                          ? "bg-green-500/20 text-green-400"
                          : problem.difficulty === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {problem.difficulty}
                    </span>

                  </td>

                  <td className="px-6 py-5">
                    {problem.acceptanceRate}%
                  </td>

                  <td className="px-6 py-5">
                    👍 {problem.likes.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex gap-2 flex-wrap">

                      {problem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}
    </AppLayout>
  );
};

export default Problems;