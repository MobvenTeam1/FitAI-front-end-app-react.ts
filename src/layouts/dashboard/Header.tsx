import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardNavigation } from "../../routes/dashboard-navigation";

export const Header: React.FC = () => {
  const location = useLocation();

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav>
        {DashboardNavigation.map((item, index) => {
          return (
            <Link
              style={{ color: isCurrentPath(item.path) ? "red" : "black" }}
              key={index}
              to={item.path}
            >
              {item.icon} {item.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
