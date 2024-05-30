import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { AddPlan } from "../components/AddPlan";

export const GoalCompletionView: React.FC = () => {
  const { addPlanValues } = useContext(HomeContext);

  return (
    <div className="px-6 py-5 border border-gray-50 shadow rounded-xl flex gap-5">
      {addPlanValues.map((plan, index) => (
        <AddPlan key={index + plan.title} {...plan} />
      ))}
    </div>
  );
};
