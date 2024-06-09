import React, { createContext, useEffect, useState } from "react";
import { setTokenLocalStorage } from "../utils/setLocalStorage";
import { FormValues } from "../pages/auth/Login";
import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api";

interface ChildrenProps {
  children: React.ReactNode;
}

interface AuthState {
  token: string | null;
}

const initialAuthState: AuthState = {
  token: null,
};

export const AuthContext = createContext<{
  authState: AuthState;
  login: (data: FormValues) => void;
  logout: () => void;
}>({
  authState: initialAuthState,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  // const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("data", data);
      setAuthState({ token: data.userToken });
      setTokenLocalStorage("accessToken", data.userToken);
      // Invalidate and refetch
      //  queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  });

  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return { token };
  });

  useEffect(() => {
    setTokenLocalStorage("accessToken", authState.token || "");
  }, [authState.token]);

  const login = (data: FormValues) => {
    mutate(data);
  };

  const logout = () => {
    setAuthState({ token: null });
    setTokenLocalStorage("accessToken", "");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
