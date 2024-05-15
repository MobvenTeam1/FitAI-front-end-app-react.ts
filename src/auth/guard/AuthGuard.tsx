import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const AuthGuard: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const accessToken = isAuth.token;

  if (accessToken !== undefined || accessToken !== "" || accessToken !== null) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
