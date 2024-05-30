import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./locales/i18n";
import { AuthContextProvider } from "./auth/AuthContext";

export const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={routes} />
        <a
          className="text-xs text-gray-100 absolute top-0 right-0"
          href="mailto:goktugdemirwebdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          goktugdemirwebdev@gmail.com
        </a>
        <a
          className="text-xs text-gray-100 absolute top-4 right-0"
          href="https://www.linkedin.com/in/goktugmuratdemir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-xs text-gray-100 absolute top-8 right-0"
          href="https://www.linkedin.com/in/goktugmuratdemir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </AuthContextProvider>
    </>
  );
};
