export interface WorkoutPlanContextValues {
  step: number;
  setStep: (step: number) => void;
  stepValues: StepWorkoutValue[];
}

export type StepWorkoutValue = {
  step: number;
  element: JSX.Element;
};
