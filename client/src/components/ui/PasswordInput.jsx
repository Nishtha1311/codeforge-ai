import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
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
            pr-12
            text-white
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-500/30
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;