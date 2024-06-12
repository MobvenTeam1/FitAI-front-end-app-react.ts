import React, { useContext } from "react";

import MusicPlayer from "./MusicPlayerView";
import ConfirmationBannerView from "./ConfirmationBannerView";
import WorkoutDetailsView from "./WorkoutDetailsView";
import ControlPanelView from "./ControlPanelView";
import { WorkoutPlanContext } from "../context/WorkoutPlanContext";
import FavoriteIconView from "./FavoriteIconView";

const Step2: React.FC = () => {
  const {
    showConfirmation,
    showWorkoutDetails,
    countdown,
    isWorkoutStarted,
    handleStartWorkout,
  } = useContext(WorkoutPlanContext);

  return (
    <div>
      <div className="relative w-full h-[525px] rounded-xl bg-[url('/src/assets/frames/frame_hiit.svg')] bg-cover bg-center flex items-center justify-center">
        <FavoriteIconView />
        <MusicPlayer />

        {showConfirmation && (
          <ConfirmationBannerView message="Favori Antrenmanlarına Eklendi" />
        )}

        {showWorkoutDetails && <WorkoutDetailsView />}

        {!showWorkoutDetails && countdown > 0 && (
          <div className="font-bold text-green-500 italic text-9xl">
            {countdown}
          </div>
        )}
        {isWorkoutStarted && <div>Another Div</div>}
      </div>

      <ControlPanelView handleStartWorkout={handleStartWorkout} />
    </div>
  );
};

export default Step2;
