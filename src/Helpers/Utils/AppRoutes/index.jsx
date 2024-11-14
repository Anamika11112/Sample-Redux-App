import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "../../../Pages/UserDashboard";
import App from "../../../App";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
    </Routes>
  );
}
export default AppRoutes;
