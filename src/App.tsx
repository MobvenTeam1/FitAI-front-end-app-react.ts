import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./locales/i18n";

export const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
