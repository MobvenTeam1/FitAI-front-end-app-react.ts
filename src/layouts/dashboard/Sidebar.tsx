import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { DashboardNavigation } from "../../routes/dashboard-navigation";
import SvgColor from "../../components/svg-color";
// import { Racoon } from "./Racoon";
import { ChangeLng } from "../../locales/change-lng";
import { Logout } from "./Logout";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="flex flex-col gap-4 max-h-screen overflow-auto">
      <div className="flex items-center justify-center gap-3 p-6">
        <SvgColor src="/logo/logo.svg" width={40} height={40} />
        <h1 className="text-4xl font-medium">
          Fit<span className="font-black">AI</span>
        </h1>
      </div>
      {/* account */}
      <div className="flex items-center px-8">
        <div className="flex items-center gap-2 bg-gray-50 w-full rounded-xl p-4">
          <img src="/frames/user.png" className="w-10 h-10" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold text-sm">John Doe</p>
            <p className="text-sm text-gray-400">Admin</p>
          </div>
        </div>
      </div>
      {/* <Racoon /> */}

      <nav className="flex flex-col gap-4">
        {DashboardNavigation.map((item, index) => (
          <>
            <div key={index} className="flex flex-col gap-4 pl-6 pr-11">
              <p className="font-bold text-sm text-gray-200 ml-4">
                {t(item.subheader)}
              </p>
              <div className="flex flex-col gap-1">
                {item.navs.map((nav, index) => (
                  <Link
                    key={index}
                    to={nav.path}
                    className={`flex items-center gap-4 p-4 rounded-md text-sm font-semibold text-gray-900  transition-all duration-200 ease-in-out ${
                      isCurrentPath(nav.path) ? "bg-green-500 " : "text-black"
                    }`}
                  >
                    {nav.icon}
                    <span>{t(nav.title)}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-0.125 bg-gray-50 w-full" />
          </>
        ))}

        <Logout />
      </nav>
      <ChangeLng />
    </aside>
  );
};
