import React from "react";
import { useRouter } from "../../hooks/useRouter";

interface LinkComponentProps {
  title: string;
  rootText: string;
  path?: string;
  onClick?: () => void;
}

export const AuthLink: React.FC<LinkComponentProps> = ({
  title,
  rootText,
  path,
  onClick,
}) => {
  const router = useRouter();

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <p
      className="text-base font-medium text-gray-500"
      onClick={() => {
        if (path) {
          handlePush(path);
        } else {
          onClick && onClick();
        }
      }}
    >
      {title} <span className="font-bold cursor-pointer">{rootText}</span>
    </p>
  );
};
