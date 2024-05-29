import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const DashboardLayoutMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
