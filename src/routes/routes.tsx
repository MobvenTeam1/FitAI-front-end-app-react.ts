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
  NutritionAdd,
  Profile,
  Programs,
  Register,
  SuccessPassword,
  Users,
  VerificationPassword,
  WorkoutAdd,
  WorkoutPlan,
  paths,
} from "./imports";
import { Suspense } from "react";
import { SplashScreen } from "../components/loading-screen/splash-screen";
import RegistrationGuard from "../auth/guard/RegistrationGuard";

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
    element: <RegistrationGuard />,
  },
  {
    path: paths.dashboard.root,
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: paths.dashboard.root,
        element: (
          <Suspense fallback={<SplashScreen />}>
            <GuestGuard />
          </Suspense>
        ),
        // element: <DashboardLayoutMain />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SplashScreen />}>
                <Home />
              </Suspense>
            ),
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
            path: paths.dashboard.workoutAdd,
            element: (
              <Suspense fallback={<SplashScreen />}>
                <WorkoutAdd />
              </Suspense>
            ),
          },
          {
            path: paths.dashboard.nutritionAdd,
            element: (
              <Suspense fallback={<SplashScreen />}>
                <NutritionAdd />
              </Suspense>
            ),
          },
          {
            path: paths.dashboard.profile,
            element: (
              <Suspense fallback={<SplashScreen />}>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: paths.dashboard.workoutPlan,
            element: (
              <Suspense fallback={<SplashScreen />}>
                <WorkoutPlan />
              </Suspense>
            ),
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
