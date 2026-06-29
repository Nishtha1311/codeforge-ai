import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;