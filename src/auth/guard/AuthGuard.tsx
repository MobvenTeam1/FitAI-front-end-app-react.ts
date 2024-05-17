import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { AuthLayoutMain } from "../../layouts/auth/AuthLayout";

export const AuthGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.token;

  return !accessToken ? <AuthLayoutMain /> : <Navigate to="/" />;
};
