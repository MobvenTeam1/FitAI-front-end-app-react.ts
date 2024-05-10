import { createBrowserRouter } from "react-router-dom";
import { NotFound404 } from "../pages/NotFound404";
import { DashboardLayoutMain } from "../layouts/dashboard/DashboardLayoutMain";
import { Home } from "../pages/dashboard/Home";
import { Users } from "../pages/dashboard/Users";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <DashboardLayoutMain />,
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

      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);

export default routes;
