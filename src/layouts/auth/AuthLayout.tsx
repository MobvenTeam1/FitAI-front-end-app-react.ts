import { Outlet } from "react-router-dom";

export const AuthLayoutMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 relative">
        <img
          className="w-full h-screen object-cover"
          src="/frames/auth-frame.png"
          alt=""
        />
        <div className="flex items-center justify-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-20 h-20" src="/logo/logo.svg" alt="" />
          <h1 className="text-3xl font-bold text-white">FitAI</h1>
        </div>
      </div>

      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
};
