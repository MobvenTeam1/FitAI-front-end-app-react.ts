import React from "react";
import { Link } from "react-router-dom";

interface LinkItem {
  name: string;
  href?: string;
}

interface CustomBreadcrumbsProps {
  links: LinkItem[];
  action?: React.ReactNode;
  heading?: string;
  moreLink?: string[];
  activeLast?: boolean;
  className?: string;
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = ({
  links,
  action,
  heading,
  moreLink,

  className,
}) => {
  return (
    <div className={`flex flex-col sm:flex-row ${className}`}>
      <div className="flex-grow">
        {heading && <h4 className="font-bold text-2xl mb-2">{heading}</h4>}

        {links.length > 0 && (
          <nav className="flex items-center gap-4">
            {links.map((link, index) => (
              <div className="flex items-center gap-4">
                <Link
                  key={link.name}
                  to={link.href || "#"}
                  className={`text-sm ${
                    index === links.length - 1 ? "text-gray-100" : ""
                  }`}
                >
                  {link.name}
                </Link>
                {index < links.length - 1 && (
                  <div className="bg-gray-100 w-1 h-1 rounded-full" />
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {action && <div className="mt-2 sm:mt-0">{action}</div>}

      {moreLink && (
        <div className="mt-2">
          {moreLink.map((href) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {href}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomBreadcrumbs;
