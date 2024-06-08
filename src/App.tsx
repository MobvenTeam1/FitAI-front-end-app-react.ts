import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./locales/i18n";
import { AuthContextProvider } from "./auth/AuthContext";
import Sign from "./components/sign";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={routes} />
          <Sign />
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};
