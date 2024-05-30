import React from "react";

const Sign: React.FC = () => {
  return (
    <div className="flex flex-col text-end absolute top-0 right-0">
      <a
        className="text-xs text-gray-100 "
        href="mailto:goktugdemirwebdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        goktugdemirwebdev@gmail.com
      </a>
      <a
        className="text-xs text-gray-100 "
        href="https://www.linkedin.com/in/goktugmuratdemir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="text-xs text-gray-100 "
        href="https://www.linkedin.com/in/goktugmuratdemir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
};
export default Sign;
