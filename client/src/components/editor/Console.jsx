const Console = ({ output }) => {
  return (
    <div className="border-t border-white/10 bg-[#18181B]">

      <div className="px-5 py-3 border-b border-white/10">

        <h3 className="text-lg font-semibold text-white">
          Console
        </h3>

      </div>

      <div className="h-40 overflow-y-auto p-5">

        <pre className="text-green-400 whitespace-pre-wrap font-mono text-sm">
          {output || "Ready..."}
        </pre>

      </div>

    </div>
  );
};

export default Console;