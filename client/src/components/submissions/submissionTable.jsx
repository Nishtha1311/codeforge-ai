const SubmissionTable = ({ submissions }) => {
  if (!submissions || submissions.length === 0) {
    return (
      <div className="bg-[#18181B] rounded-xl p-10 text-center text-gray-400 border border-white/10">
        No submissions found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">

      <table className="w-full">

        <thead className="bg-[#18181B]">

          <tr className="text-left">

            <th className="px-6 py-4">Problem</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Language</th>

            <th className="px-6 py-4">Time</th>

            <th className="px-6 py-4">Memory</th>

            <th className="px-6 py-4">Submitted At</th>

          </tr>

        </thead>

        <tbody>

          {submissions.map((submission) => (

            <tr
              key={submission._id}
              className="border-t border-white/10 hover:bg-white/5 transition"
            >

              <td className="px-6 py-4 font-medium">
                {submission.problem?.title || "Unknown Problem"}
              </td>

              <td className="px-6 py-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    submission.status === "Accepted"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {submission.status}
                </span>

              </td>

              <td className="px-6 py-4">
                {submission.language}
              </td>

              <td className="px-6 py-4">
                {submission.executionTime} ms
              </td>

              <td className="px-6 py-4">
                {submission.memory} KB
              </td>

              <td className="px-6 py-4">
                {new Date(submission.createdAt).toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default SubmissionTable;