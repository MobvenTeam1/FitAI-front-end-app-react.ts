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
    <aside className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-3 p-6">
        <SvgColor src="/logo/logo.svg" width={40} height={40} />
        <h1 className="text-4xl font-medium">
          Fit<span className="font-black">AI</span>
        </h1>
      </div>
      {/* <Racoon /> */}

      <nav className="flex flex-col gap-1">
        {DashboardNavigation.map((item, index) => (
          <>
            <div key={index} className="flex flex-col gap-4 px-6">
              <p className="font-bold text-sm text-gray-400">{item.subheader}</p>
              <div className="flex flex-col">
                {item.navs.map((nav, index) => (
                  <Link
                    key={index}
                    to={nav.path}
                    className={`flex items-center gap-3 p-2 rounded-md ${
                      isCurrentPath(nav.path)
                        ? "bg-gray-200 text-gray-400"
                        : "text-black"
                    }`}
                  >
                    {nav.icon}
                    <span>{t(nav.title)}</span>
                  </Link>
                ))}
              </div>
            </div>
            <hr />
          </>
        ))}
      </nav>
      <ChangeLng />
      <Logout />
    </aside>
  );
};
