import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Code2,
  History,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logoutUser } from "../../services/authService";


const AppLayout = ({ children }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Problems",
    icon: Code2,
    path: "/problems",
  },
  {
    name: "Submissions",
    icon: History,
    path: "/submissions",
  },
];

const handleLogout = async () => {
  try {
    await logoutUser();

    setUser(null);

    toast.success("Logged out successfully.");

    navigate("/login");

  } catch (error) {

    toast.error("Logout failed.");

  }
};
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex">

      {/* Sidebar */}

     <aside className="w-72 bg-[#111114] border-r border-white/10 p-6 flex flex-col">

        <h1 className="text-3xl font-bold mb-12">
          CodeForge AI
        </h1>

        <nav className="space-y-3">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-indigo-600"
                      : "hover:bg-white/10"
                  }`
                }
              >
                <Icon size={20} />

                {item.name}
              </NavLink>
            );
          })}

        </nav>

        <button
  onClick={handleLogout}
 className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-300 px-4 py-3 rounded-xl hover:bg-white/10 transition"
>
  <LogOut size={20} />
  Logout
</button>

      </aside>

      {/* Main */}

      <div className="flex-1">

        {/* Navbar */}

        <header className="h-20 border-b border-white/10 flex justify-between items-center px-8">

          <div>

            <h2 className="text-3xl font-bold">
              Welcome, {user?.fullName}
            </h2>

            <p className="text-gray-400">
              Ready to solve some problems?
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
              {user?.fullName?.charAt(0)}
            </div>

            <div>

              <p className="font-semibold">
                {user?.fullName}
              </p>

              <p className="text-sm text-gray-400">
                {user?.email}
              </p>

            </div>

          </div>

        </header>

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default AppLayout;