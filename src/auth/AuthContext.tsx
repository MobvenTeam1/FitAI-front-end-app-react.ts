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
    isAuth: AuthState;
  login: (data: FormValues) => void;
  logout: () => void;
}>({
    isAuth: initialAuthState,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuthState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        setIsAuth({ token });
    }
  }, []);

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
        console.log(json.token);
        setIsAuth({ token: json.token });
        setTokenLocalStorage(json.token);
      });
  };

  const logout = () => {
    setIsAuth({ token: null });
    setTokenLocalStorage("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
