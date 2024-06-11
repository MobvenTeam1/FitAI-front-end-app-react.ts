import React, { createContext, useState } from "react";
import { StepWorkoutValue, WorkoutPlanContextValues } from "./types";
import Step1 from "../views/Step1";
import Step2 from "../views/Step2";
import Step3 from "../views/Step3";

// Create the context with default values
export const WorkoutPlanContext = createContext<WorkoutPlanContextValues>({
  step: 0,
  setStep: () => {},
  stepValues: [],
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const WorkoutPlanContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [step, setStep] = useState<number>(1);

  const stepValues: StepWorkoutValue[] = [
    {
      step: 1,
      element: <Step1 />,
    },
    {
      step: 2,
      element: <Step2 />,
    },
    {
      step: 3,
      element: <Step3 />,
    },
  ];
  return (
    <WorkoutPlanContext.Provider value={{ step, setStep, stepValues }}>
      {children}
    </WorkoutPlanContext.Provider>
  );
};
