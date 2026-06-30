const VerdictModal = ({ open, onClose, verdict }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#18181B] w-[420px] rounded-xl p-6 border border-white/10">

        <h2 className="text-2xl font-bold mb-6 text-white">
          Submission Result
        </h2>

        <div className="space-y-3 text-white">

          <p>
            <strong>Status:</strong>{" "}
            {verdict?.status || "Unknown"}
          </p>

          <p>
            <strong>Passed:</strong>{" "}
            {verdict?.passedTestCases ?? 0} /{" "}
            {verdict?.totalTestCases ?? 0}
          </p>

          <p>
            <strong>Execution Time:</strong>{" "}
            {verdict?.executionTime ?? 0} ms
          </p>

          <p>
            <strong>Memory:</strong>{" "}
            {verdict?.memory ?? 0} KB
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg text-white font-semibold"
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default VerdictModal;