import React, { useContext } from "react";
import PlanHeaderView from "./PlanHeaderView";
import TargerGoalView from "./TargerGoalView";
import WorkoutDetail from "./WorkoutDetail";
import MusicSuggestion from "./MusicSuggestion";
import { CustomButton } from "../../../../components/customs/custom-button";
import { WorkoutPlanContext } from "../context/WorkoutPlanContext";

const Step1: React.FC = () => {
  const { step, setStep } = useContext(WorkoutPlanContext);
  return (
    <div className="flex flex-col gap-3">
      <PlanHeaderView />
      <div className="flex items-center gap-3">
        <TargerGoalView
          img="analog-clock"
          title="Zaman"
          subtitle="Dakika"
          value={45}
        />
        <TargerGoalView
          img="kcal-fire"
          title="Kalori"
          subtitle="Kcal"
          value={155}
        />
      </div>
      <WorkoutDetail />
      <MusicSuggestion />
      <CustomButton
        label="Antrenmana Başla"
        onClick={() => setStep(step + 1)}
      />
    </div>
  );
};

export default Step1;
