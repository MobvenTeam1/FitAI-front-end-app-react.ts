import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export const DashboardLayoutMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-5 h-screen">
      <div className="col-span-2 max-md:hidden">
        <Sidebar />
      </div>

      <div className="col-span-10 max-md:col-span-12 h-screen overflow-auto">
        <div className="container mx-auto flex flex-col gap-14 mt-28 pr-32">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
