import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./locales/i18n";
import { AuthContextProvider } from "./auth/AuthContext";

export const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={routes} />
      </AuthContextProvider>
    </>
  );
};
