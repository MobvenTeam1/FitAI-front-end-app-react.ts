import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardNavigation } from "../../routes/dashboard-navigation";
import { ChangeLng } from "../../locales/change-lng";
import { useTranslation } from "react-i18next";
import { Account } from "./Account";

export const Header: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between p-6 max-sm:flex-col gap-4">
        <div className="flex space-x-4">
          {DashboardNavigation.map((item, index) => {
            return (
              <Link
                className={`py-2 px-4 rounded ${
                  isCurrentPath(item.path) ? "bg-red-600" : "hover:bg-gray-700"
                }`}
                key={index}
                to={item.path}
              >
                {item.icon} {t(item.title)}
              </Link>
            );
          })}
        </div>

        <div className="flex gap-3 items-center max-sm:justify-end">
          <Account />
          <ChangeLng />
        </div>
      </nav>
    </header>
  );
};
