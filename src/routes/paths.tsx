interface DashboardPaths {
  root: string;
  users: {
    root: string;
  };
}

interface AuthPaths {
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
  },
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
};
