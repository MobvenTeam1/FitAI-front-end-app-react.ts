import { Outlet, createBrowserRouter } from "react-router-dom";
import { NotFound404 } from "../pages/NotFound404";
import { Home } from "../pages/dashboard/Home";
import { Users } from "../pages/dashboard/Users";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { AuthGuard } from "../auth/guard/AuthGuard";
import { GuestGuard } from "../auth/guard/GuestGuard";

const routes = createBrowserRouter([
  {
    path: "auth",
    element: <AuthGuard />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <GuestGuard />,
        // element: <DashboardLayoutMain />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);

export default routes;
