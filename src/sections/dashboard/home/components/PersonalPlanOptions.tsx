import React from "react";
import { OptionsPersonalProgram } from "../context/HomeContext";

type Props = {
  value: OptionsPersonalProgram;
};

export const PersonalPlanOptions: React.FC<Props> = ({ value }) => {
  return (
    <div className="flex flex-col gap-3 shadow px-6 py-5 pt-7 -mt-5 border border-t-0 border-gray-50 rounded-b-xl">
      <p className="text-gray-500 font-bold text-lg">{value.optionTitle}</p>
      {value.optionDetails.map((option, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black-100 rounded-xl p-3">
              <img
                className="w-6 h-6"
                src={`/icons/ic_${option.optionImage}.svg`}
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-base">{option.optionTitle}</p>
              <p className="text-gray-300 text-sm">{option.optionSubtitle}</p>
            </div>
          </div>
          <div className="rounded-xl py-2 px-2.5 bg-green-500">
            <img className="w-5 h-5" src="/icons/ic_stars.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
