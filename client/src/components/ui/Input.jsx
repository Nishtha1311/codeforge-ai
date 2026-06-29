const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500/30
        "
      />
    </div>
  );
};

export default Input;