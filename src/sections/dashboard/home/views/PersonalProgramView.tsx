import React from "react";
import { PersonalPlanCard } from "../../../../components/PersonalPlanCard";
import { PersonalPropram } from "../context/types";

interface Props {
  values: PersonalPropram[];
  header: string;
}

export const PersonalProgramView: React.FC<Props> = ({ values, header }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-bold text-lg">{header}</p>
      {values.map((value, index) => (
        <PersonalPlanCard key={index + value.programId} value={value} />
      ))}
    </div>
  );
};
