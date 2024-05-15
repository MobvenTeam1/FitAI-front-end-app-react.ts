import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DashboardLayoutMain } from "../../layouts/dashboard/DashboardLayoutMain";
import { AuthContext } from "../AuthContext";

export const GuestGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.token;

  return accessToken ? <DashboardLayoutMain /> : <Navigate to="/auth/login" />;
};
