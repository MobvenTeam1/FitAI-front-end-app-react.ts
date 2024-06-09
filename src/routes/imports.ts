// imports.ts

import { lazy } from "react";

export { NotFound404 } from "../pages/NotFound404";
// export { Home } from "../pages/dashboard/Home";
export { Users } from "../pages/dashboard/Users";
export { Login } from "../pages/auth/Login";
export { Register } from "../pages/auth/Register";
// export { AuthGuard } from "../auth/guard/AuthGuard";
// export { GuestGuard } from "../auth/guard/GuestGuard";
export { Programs } from "../pages/dashboard/Programs";
export { Registration } from "../pages/registration/Registration";
export { paths } from "./paths";
export { NewPassword } from "../pages/auth/NewPassword";
export { CreateNewPassword } from "../pages/auth/CreateNewPassword";
export { VerificationPassword } from "../pages/auth/VerificationPassword";
export { SuccessPassword } from "../pages/auth/SuccessPassword";
export { ForgotPassword } from "../pages/auth/ForgotPassword";
// export { Profile } from "../pages/dashboard/Profile";
// export { NutritionAdd } from "../pages/dashboard/NutritionAdd";
// export { WorkoutAdd } from "../pages/dashboard/WorkoutAdd";

export const Home = lazy(() => import("../pages/dashboard/Home"));
export const Profile = lazy(() => import("../pages/dashboard/Profile"));
export const WorkoutPlan = lazy(() => import("../pages/dashboard/WorkoutPlan"));
export const NutritionAdd = lazy(
  () => import("../pages/dashboard/NutritionAdd")
);
export const WorkoutAdd = lazy(() => import("../pages/dashboard/WorkoutAdd"));
export const AuthGuard = lazy(() => import("../auth/guard/AuthGuard"));
export const GuestGuard = lazy(() => import("../auth/guard/GuestGuard"));

