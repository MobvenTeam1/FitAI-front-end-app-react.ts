import { Outlet } from "react-router-dom";

export const AuthLayoutMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        <h1>Dashboard Layout Main</h1>
      </div>

      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
};
