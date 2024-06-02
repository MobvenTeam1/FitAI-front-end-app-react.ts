import { Outlet, createBrowserRouter } from "react-router-dom";
import {
  AuthGuard,
  CreateNewPassword,
  ForgotPassword,
  GuestGuard,
  Home,
  Login,
  NewPassword,
  NotFound404,
  Profile,
  Programs,
  Register,
  Registration,
  SuccessPassword,
  Users,
  VerificationPassword,
  paths,
} from "./imports";

const routes = createBrowserRouter([
  {
    path: paths.auth.root,
    element: <AuthGuard />,
    children: [
      {
        path: paths.auth.login,
        element: <Login />,
      },
      {
        path: paths.auth.register,
        element: <Register />,
      },
      {
        path: paths.auth.forgotPassword,
        element: <ForgotPassword />,
      },
      {
        path: paths.auth.newPassword,
        element: <NewPassword />,
      },
      {
        path: paths.auth.createNewPassword,
        element: <CreateNewPassword />,
      },
      {
        path: paths.auth.verificationPassword,
        element: <VerificationPassword />,
      },
      {
        path: paths.auth.successPassword,
        element: <SuccessPassword />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: paths.dashboard.root,
    element: <Outlet />,
    children: [
      {
        path: paths.dashboard.root,
        element: <GuestGuard />,
        // element: <DashboardLayoutMain />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: paths.dashboard.users.root,
            element: <Users />,
          },
          {
            path: paths.dashboard.programs,
            element: <Programs />,
          },
          {
            path: paths.dashboard.profile,
            element: <Profile />,
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
