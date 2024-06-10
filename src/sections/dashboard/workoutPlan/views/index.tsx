import React, { useContext } from "react";
import { WorkoutPlanContext } from "../context/WorkoutPlanContext";
import AiSuggestionView from "./AiSuggestionView";
import FavoriWorkoutsView from "./FavoriWorkoutsView";

const WorkoutPlanView: React.FC = () => {
  const { step, stepValues } = useContext(WorkoutPlanContext);
  const currentStep = stepValues.find((item) => item.step === step);

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-8">{currentStep?.element}</div>
      <div className="col-span-4">
        <div className="flex flex-col gap-5">
          <AiSuggestionView />
          <FavoriWorkoutsView />
        </div>
      </div>
    </div>
  );
};
export default WorkoutPlanView;
