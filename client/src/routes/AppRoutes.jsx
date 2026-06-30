import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import Problems from "../pages/Problems/Problems";
import ProblemDetails from "../pages/ProblemDetails/ProblemDetails";
import SubmissionHistory from "../pages/submissions/SubmissionHistory";

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

      <Route
  path="/problems"
  element={
    <ProtectedRoute>
      <Problems />
    </ProtectedRoute>
  }
/>

<Route
  path="/problems/:slug"
  element={
    <ProtectedRoute>
      <ProblemDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/submissions"
  element={
    <ProtectedRoute>
      <SubmissionHistory />
    </ProtectedRoute>
  }
/>

    </Routes>

   
  );
};

export default AppRoutes;