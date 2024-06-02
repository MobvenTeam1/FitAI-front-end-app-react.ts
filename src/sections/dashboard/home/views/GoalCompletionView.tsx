import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { AddPlan } from "../components/AddPlan";
import { RadialChart } from "../../../../components/charts/RadialChart";
import { GoalCompletionInfos } from "../components/GoalCompletionInfos";

export const GoalCompletionView: React.FC = () => {
  const { addPlanValues, goalCompletionInfoValues } = useContext(HomeContext);

  return (
    <div className="px-6 py-5 border border-gray-50 shadow rounded-xl flex flex-col items-center gap-10">
      <div className="grid grid-cols-12 gap-5 w-full">
        {addPlanValues.map((plan, index) => (
          <div key={index + plan.title} className="col-span-6">
            <AddPlan {...plan} />
          </div>
        ))}
      </div>
      
      <RadialChart size="md" labels={["Hedef Tamamlama"]} />

      <div className="flex items-center">
        {goalCompletionInfoValues.map((info, index) => (
          <GoalCompletionInfos
            key={index}
            {...info}
            isEnd={goalCompletionInfoValues.length - 1 === index}
          />
        ))}
      </div>
    </div>
  );
};
