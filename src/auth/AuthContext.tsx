import React, { createContext, useEffect, useState } from "react";
import { setTokenLocalStorage } from "../utils/setLocalStorage";
import { FormValues } from "../pages/auth/Login";

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
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return { token };
  });

  useEffect(() => {
    setTokenLocalStorage(authState.token || "");
  }, [authState.token]);

  const login = (data: FormValues) => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.token);
        setAuthState({ token: json.token });
        setTokenLocalStorage(json.token);
      });
  };

  const logout = () => {
    setAuthState({ token: null });
    setTokenLocalStorage("");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
