interface DashboardPaths {
  root: string;
  users: {
    root: string;
  };
  programs: string;
}

interface AuthPaths {
  root: string;
  login: string;
  register: string;
  forgotPassword: string;
  resetPassword: string;
}

export interface Paths {
  dashboard: DashboardPaths;
  auth: AuthPaths;
}

export const paths: Paths = {
  dashboard: {
    root: "/",
    users: {
      root: "/users",
    },
    programs: "/programs",
  },
  auth: {
    root: "auth",
    login: "login",
    register: "register",
    forgotPassword: "forgot-password",
    resetPassword: "reset-password",
  },
};
