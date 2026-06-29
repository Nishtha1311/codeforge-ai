import { FaCode } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30">
        <FaCode className="text-white text-lg" />
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-wide text-white">
          CodeForge
        </h2>

        <p className="text-xs text-gray-400 -mt-1">
          AI Coding Platform
        </p>
      </div>
    </div>
  );
};

export default Logo;