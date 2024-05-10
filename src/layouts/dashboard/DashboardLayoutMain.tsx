import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const DashboardLayoutMain: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};
