import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { AuthLayoutMain } from "../../layouts/auth/AuthLayout";
import { paths } from "../../routes/paths";

const AuthGuard: React.FC = () => {
  const { authState } = useContext(AuthContext);
  const accessToken = authState.accessToken;
  const registerToken = authState.registerToken;

  if (registerToken) {
    return <Navigate to={paths.registration} />;
  }

  return !accessToken ? <AuthLayoutMain /> : <Navigate to="/" />;
};

export default AuthGuard;
