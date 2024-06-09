import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { AuthLayoutMain } from "../../layouts/auth/AuthLayout";

const AuthGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.accessToken;

  return !accessToken ? <AuthLayoutMain /> : <Navigate to="/" />;
};

export default AuthGuard;
