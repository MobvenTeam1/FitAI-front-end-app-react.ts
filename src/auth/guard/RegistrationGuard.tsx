import React, { useContext, ReactElement, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../AuthContext";
import { paths } from "../../routes/paths";
import { Registration } from "../../routes/imports";

const RegistrationGuard: React.FC = (): ReactElement | null => {
  const { authState, logout } = useContext(AuthContext);
  const registerToken = authState.registerToken;
  const location = useLocation();

  useEffect(() => {
    // Eğer registerToken var ve mevcut path /registration değilse, logout fonksiyonunu çağır
    if (registerToken && location.pathname !== paths.registration) {
      logout();
    }
  }, [registerToken, location.pathname, logout]);

  // Redirects the user if the registerToken is not present
  if (!registerToken) {
    return <Navigate to={`/${paths.auth.root}/${paths.auth.login}`} />;
  }

  // Render children components if registerToken exists
  return <Registration />; // Assuming the guard's purpose is redirection, not rendering children directly
};

export default RegistrationGuard;
