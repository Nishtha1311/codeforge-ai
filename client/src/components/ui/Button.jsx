import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20",

    outline:
      "border border-gray-600 bg-transparent hover:bg-gray-800 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    ghost:
      "hover:bg-gray-800 text-gray-300",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-5 py-2.5",

    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;