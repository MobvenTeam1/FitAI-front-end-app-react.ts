import React from "react";

import { CustomButton } from "../../../../components/customs/custom-button";
import { PersonalPlanOptionItem } from "./PersonalPlanOptionItem";
import { OptionsPersonalProgram } from "../context/types";

type Props = {
  value: OptionsPersonalProgram;
};

export const PersonalPlanOptions: React.FC<Props> = ({ value }) => {
  return (
    <div className="flex flex-col gap-3 shadow px-6 py-5 pt-7 border border-t-0 border-gray-50 rounded-b-xl">
      <p className="text-gray-500 font-bold text-lg">{value.optionTitle}</p>
      {value.optionDetails.map((option, index) => (
        <PersonalPlanOptionItem key={index+option.optionId} option={option}  />
      ))}
      <CustomButton label="Programı Görüntüle" />
    </div>
  );
};
