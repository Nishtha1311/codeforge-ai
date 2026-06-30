const EditorToolbar = ({
  language,
  setLanguage,
  onRun,
  onSubmit,
  onHint,
  onExplain,
  onFindBugs,
  onReset,
  loading,
  submitting,
  aiLoading,
}) => {
  return (
    <div className="bg-[#18181B] border-b border-white/10 p-4">

      {/* Top Row */}

      <div className="flex items-center gap-3 mb-3">

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#27272A] text-white rounded-lg px-4 py-2 w-44 outline-none"
        >
          <option>JavaScript</option>
        </select>

        <button
          onClick={onReset}
          className="bg-gray-600 hover:bg-gray-700 transition px-4 py-2 rounded-lg"
        >
          Reset
        </button>

        <button
          onClick={onRun}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg"
        >
          {loading ? "Running..." : "Run"}
        </button>

        <button
          onClick={onSubmit}
          disabled={submitting}
          className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-lg"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>

      </div>

      {/* Bottom Row */}

      <div className="flex gap-3">

        <button
          onClick={onHint}
          disabled={aiLoading}
          className="flex-1 bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-medium"
        >
          💡 AI Hint
        </button>

        <button
          onClick={onExplain}
          disabled={aiLoading}
          className="flex-1 bg-orange-600 hover:bg-orange-700 transition py-2 rounded-lg font-medium"
        >
          📖 Explain Code
        </button>

        <button
  onClick={onFindBugs}
  disabled={aiLoading}
  className="flex-1 bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-medium"
>
  🐞 Find Bugs
</button>

      </div>

    </div>
  );
};

export default EditorToolbar;