import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DashboardLayoutMain } from "../../layouts/dashboard/DashboardLayoutMain";
import { AuthContext } from "../AuthContext";

export const GuestGuard: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const accessToken = isAuth.token;

  if (accessToken === undefined || accessToken === "" || accessToken === null) {
    return null;
  }

  return accessToken ? <DashboardLayoutMain /> : <Navigate to="/auth/login" />;
};
