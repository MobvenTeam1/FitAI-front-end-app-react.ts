import React from "react";
import { useRouter } from "../../hooks/useRouter";

interface LinkComponentProps {
  title: string;
  rootText: string;
  path: string;
}

export const AuthLink: React.FC<LinkComponentProps> = ({
  title,
  rootText,
  path,
}) => {
  const router = useRouter();

  const handlePush = (path: string) => {
    router.push(path);
  };

  return (
    <p className="text-base text-black-500" onClick={() => handlePush(path)}>
      {title} <span className="font-bold cursor-pointer">{rootText}</span>
    </p>
  );
};
