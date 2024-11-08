import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import UserDashboard from "../../../Pages/UserDashboard";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
    </Routes>
  );
}
export default AppRoutes;
