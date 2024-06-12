import React from "react";
import { CustomButton } from "./customs/custom-button";

type ResultNotFoundProps = {
  buttonLabel: string;
  message: string;
};

const ResultNotFound: React.FC<ResultNotFoundProps> = ({
  buttonLabel,
  message,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="w-28 h-28 rounded-full p-8 bg-black-100 flex items-center justify-center">
        <img
          className="w-full h-full"
          src="/src/assets/icons/ic_not-fount.svg"
          alt="not-found"
        />
      </div>
      <div className="flex flex-col gap-2 max-w-sm text-center">
        <p className="font-bold text-lg">Sonuçlar Bulunamadı</p>
        <p className="text-gray-300 text-sm">{message}</p>
      </div>
      <div className="max-w-sm w-full">
        <CustomButton label={buttonLabel} />
      </div>
    </div>
  );
};
export default ResultNotFound;
