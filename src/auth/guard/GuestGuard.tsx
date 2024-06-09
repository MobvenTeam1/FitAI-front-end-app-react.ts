import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DashboardLayoutMain } from "../../layouts/dashboard/DashboardLayoutMain";
import { AuthContext } from "../AuthContext";

const GuestGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.accessToken;

  return accessToken ? <DashboardLayoutMain /> : <Navigate to="/auth/login" />;
};

export default GuestGuard;