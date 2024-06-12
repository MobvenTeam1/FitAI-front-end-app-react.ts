import React, { createContext, useEffect, useState } from "react";
import { setTokenLocalStorage } from "../utils/setLocalStorage";

import { useMutation } from "@tanstack/react-query";
import { getUserDetailsRequest, loginRequest, registerRequest } from "../api";
import { LoginFormValues } from "../pages/auth/Login";
import { RegisterFormValues } from "../pages/auth/Register";
import { toast } from "react-toastify";
import { User } from "./type";

interface ChildrenProps {
  children: React.ReactNode;
}

interface AuthState {
  accessToken: string | null;
  registerToken: string | null;
  isFirstLogin: string | null;
}

const initialAuthState: AuthState = {
  accessToken: null,
  registerToken: null,
  isFirstLogin: null,
};

export const AuthContext = createContext<{
  user: User | null;
  authState: AuthState;
  login: (data: LoginFormValues) => void;
  logout: () => void;
  register: (data: RegisterFormValues) => void;
  isLoading: boolean;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}>({
  user: null,
  authState: initialAuthState,
  login: () => {},
  logout: () => {},
  register: () => {},
  isLoading: false,
  setAuthState: () => {},
});

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  // const pathname = window.location.pathname;

  const [authState, setAuthState] = useState(() => {
    const accessToken = localStorage.getItem("accessToken");
    const registerToken = localStorage.getItem("registerToken");
    const isFirstLogin = localStorage.getItem("isFirstLogin");
    return { accessToken, registerToken, isFirstLogin };
  });

  const [user, setUser] = useState<User | null>(null);

  // console.log(user);

  useEffect(() => {
    if (authState.accessToken) {
      userDetailMutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTokenLocalStorage("accessToken", authState.accessToken || "");
    setTokenLocalStorage("registerToken", authState.registerToken || "");
    setTokenLocalStorage("isFirstLogin", authState.isFirstLogin || "");
  }, [authState.accessToken, authState.registerToken, authState.isFirstLogin]);

  // const queryClient = useQueryClient();
  const { mutate: userDetailMutate } = useMutation({
    mutationFn: getUserDetailsRequest,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: loginMutate, isPending: isLoadingLogin } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("data", data);
      setAuthState((prevState) => ({
        ...prevState,
        accessToken: data.userToken.token,
      }));
      setTokenLocalStorage("accessToken", data.userToken.token);
      setAuthState((prevState) => ({
        ...prevState,
        isFirstLogin: data.userToken.isFirstLogin ? "true" : "false",
      }));
      setTokenLocalStorage(
        "isFirstLogin",
        data.userToken.isFirstLogin ? "true" : "false"
      );
      toast.success(
        data.userToken.isFirstLogin
          ? "Lütfen Formu Doldurunuz"
          : "Giriş Başarılı"
      );
      userDetailMutate();
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
        registerToken: data.userToken.token,
      }));
      setTokenLocalStorage("registerToken", data.userToken.token);
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
      isFirstLogin: null,
    }));
    setTokenLocalStorage("accessToken", "");
    setTokenLocalStorage("registerToken", "");
    setTokenLocalStorage("isFirstLogin", "");
  };

  // useEffect(() => {
  //   if (authState.registerToken && pathname !== paths.registration) {
  //     logout();
  //   }
  // }, [authState.registerToken, pathname]);

  const isLoading = isLoadingLogin || isLoadingRegister;

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        register,
        logout,
        isLoading,
        setAuthState,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
