import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export const AuthGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.token;

  return !accessToken ? <Outlet /> : <Navigate to="/" />;
};
