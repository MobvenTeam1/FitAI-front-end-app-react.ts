import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { GoalInfo } from "../../../../components/GoalInfo";

export const DailyGoalsView: React.FC = () => {
  const { goalValues } = useContext(HomeContext);
  return (
    <>
      <p className="text-lg font-bold">Günlük Hedefler</p>
      <div className="grid grid-cols-12 gap-5">
        {goalValues.map((goal, index) => (
          <div key={index} className="col-span-4">
            <GoalInfo {...goal} />
          </div>
        ))}
      </div>
    </>
  );
};
