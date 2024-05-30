import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { DashboardNavigation } from "../../routes/dashboard-navigation";
import SvgColor from "../../components/svg-color";
// import { Racoon } from "./Racoon";
import { ChangeLng } from "../../locales/change-lng";
import { AuthContext } from "../../auth/AuthContext";

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { logout } = useContext(AuthContext);

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside className="flex flex-col gap-4 max-h-screen overflow-auto">
      <div className="flex items-center justify-start gap-3 py-6 px-8">
        <SvgColor src="/logo/logo.svg" width={40} height={40} />
        <h1 className="text-4xl font-medium">
          Fit<span className="font-black">AI</span>
        </h1>
      </div>
      {/* <Racoon /> */}

      <nav className="flex flex-col gap-4">
        {DashboardNavigation.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <p className="font-bold text-sm mx-9 text-gray-200">
              {t(item.subheader)}
            </p>
            <div className="flex flex-col gap-1">
              {item.navs.map((nav, index) => (
                <div className="flex gap-2 w-full">
                  <div
                    className={`h-14 rounded-e-full w-2 ${
                      isCurrentPath(nav.path) && "bg-green-500"
                    }`}
                  />

                  <Link
                    key={index}
                    to={nav.path}
                    className={`flex w-full items-center gap-4 px-5 py-4 rounded-md text-sm font-semibold text-gray-900  transition-all duration-200 ease-in-out ${
                      isCurrentPath(nav.path) ? "bg-green-500 " : "text-black"
                    }`}
                    onClick={() => nav.title === "logout" && logout()}
                  >
                    {nav.icon}
                    <span>{t(nav.title)}</span>
                  </Link>
                </div>
              ))}
            </div>
            {DashboardNavigation.length - 1 !== index && (
              <div className="h-0.125 bg-gray-50 w-full" />
            )}
          </div>
        ))}
      </nav>
      <ChangeLng />
    </aside>
  );
};
