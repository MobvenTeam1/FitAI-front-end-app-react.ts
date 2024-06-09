import React, { createContext, useEffect, useState } from "react";
import { setTokenLocalStorage } from "../utils/setLocalStorage";
import { FormValues } from "../pages/auth/Login";
import { useMutation } from "@tanstack/react-query";
import { loginRequest, registerRequest } from "../api";

interface ChildrenProps {
  children: React.ReactNode;
}

interface AuthState {
  accessToken: string | null;
  registerToken: string | null;
}

const initialAuthState: AuthState = {
  accessToken: null,
  registerToken: null,
};

export const AuthContext = createContext<{
  authState: AuthState;
  login: (data: FormValues) => void;
  logout: () => void;
  register: (data: FormValues) => void;
}>({
  authState: initialAuthState,
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
    const registerToken = localStorage.getItem("registerToken");
    return { accessToken, registerToken };
  });

  useEffect(() => {
    setTokenLocalStorage("accessToken", authState.accessToken || "");
  }, [authState.accessToken]);

  // const queryClient = useQueryClient();
  const { mutate: loginMutate } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("data", data);
      setAuthState((prevState) => ({
        ...prevState,
        accessToken: data.userToken,
      }));
      setTokenLocalStorage("accessToken", data.userToken);
    },
  });

  const { mutate: registerMutate } = useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      console.log("data", data);
      setAuthState((prevState) => ({
        ...prevState,
        registerToken: data.userToken,
      }));
      setTokenLocalStorage("registerToken", data.userToken);
    },
  });

  const register = (data: FormValues) => {
    registerMutate(data);
  };

  const login = (data: FormValues) => {
    loginMutate(data);
  };

  const logout = () => {
    setAuthState((prevState) => ({ ...prevState, accessToken: null }));
    setTokenLocalStorage("accessToken", "");
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
