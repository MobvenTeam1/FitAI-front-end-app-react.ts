import React from "react";
import PlanHeaderView from "./PlanHeaderView";
import TargerGoalView from "./TargerGoalView";

const WorkoutPlanView: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8 flex flex-col gap-3">
        <PlanHeaderView />
        <div className="flex items-center gap-3">
          <TargerGoalView img="analog-clock" title="Zaman" subtitle="Dakika" value={45} />
          <TargerGoalView img="kcal-fire" title="Kalori" subtitle="Kcal" value={155} />
        </div>
      </div>
      <div className="col-span-4">y</div>
    </div>
  );
};
export default WorkoutPlanView;
