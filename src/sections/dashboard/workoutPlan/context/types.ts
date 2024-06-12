export interface WorkoutPlanContextValues {
  step: number;
  setStep: (step: number) => void;
  stepValues: StepWorkoutValue[];
  isWorkoutStarted: boolean;
  handleStartWorkout: () => void;
  toggleFavorite: () => void;
  showConfirmation: boolean;
  isFavorite: boolean;
  showWorkoutDetails: boolean;
  countdown: number;
}

export type StepWorkoutValue = {
  step: number;
  element: JSX.Element;
};
