import React, { createContext, useEffect, useState } from "react";
import { setTokenLocalStorage } from "../utils/setLocalStorage";

import { useMutation } from "@tanstack/react-query";
import { loginRequest, registerRequest } from "../api";
import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { toast } from "react-toastify";

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
  login: (data: LoginFormValues) => void;
  logout: () => void;
  register: (data: RegisterFormValues) => void;
  isLoading: boolean;
}>({
  authState: initialAuthState,
  login: () => {},
  logout: () => {},
  register: () => {},
  isLoading: false,
});

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  // const pathname = window.location.pathname;

  const [authState, setAuthState] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
    const registerToken = localStorage.getItem("registerToken");
    return { accessToken, registerToken };
  });

  useEffect(() => {
    setTokenLocalStorage("accessToken", authState.accessToken || "");
  }, [authState.accessToken]);

  // const queryClient = useQueryClient();
  const { mutate: loginMutate, isPending: isLoadingLogin } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("data", data);
      setAuthState((prevState) => ({
        ...prevState,
        accessToken: data.userToken,
      }));
      setTokenLocalStorage("accessToken", data.userToken);
      toast.success("Giriş Başarılı");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: registerMutate, isPending: isLoadingRegister } = useMutation({
    mutationFn: registerRequest,
    onSuccess: (data) => {
      setAuthState((prevState) => ({
        ...prevState,
        registerToken: data.userToken,
      }));
      setTokenLocalStorage("registerToken", data.userToken);
      toast.success("Kayıt Başarılı");
      // window.location.href = "/registration";
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const register = (data: RegisterFormValues) => {
    registerMutate(data);
  };

  const login = (data: LoginFormValues) => {
    loginMutate(data);
  };

  const logout = () => {
    setAuthState((prevState) => ({
      ...prevState,
      accessToken: null,
      registerToken: null,
    }));
    setTokenLocalStorage("accessToken", "");
    setTokenLocalStorage("registerToken", "");
  };

  // useEffect(() => {
  //   if (authState.registerToken && pathname !== paths.registration) {
  //     logout();
  //   }
  // }, [authState.registerToken, pathname]);

  const isLoading = isLoadingLogin || isLoadingRegister;

  return (
    <AuthContext.Provider
      value={{ authState, login, register, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
