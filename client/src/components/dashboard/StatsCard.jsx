const StatsCard = ({ title, value, color }) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-[#18181B]
        p-6
        shadow-lg
      "
    >
      <p className="text-gray-400 text-sm mb-2">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold ${color}`}
      >
        {value}
      </h2>
    </div>
  );
};

export default StatsCard;