import React, { createContext, useEffect, useState } from "react";
import { StepWorkoutValue, WorkoutPlanContextValues } from "./types";
import Step1 from "../views/Step1";
import Step2 from "../views/Step2";
import Step3 from "../views/Step3";

// Create the context with default values
export const WorkoutPlanContext = createContext<WorkoutPlanContextValues>({
  step: 0,
  setStep: () => {},
  stepValues: [],
  isWorkoutStarted: false,
  handleStartWorkout: () => {},
  isFavorite: false,
  toggleFavorite: () => {},
  showConfirmation: false,
  showWorkoutDetails: true,
  countdown: 3,
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

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const [showWorkoutDetails, setShowWorkoutDetails] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (countdown > 0 && !showWorkoutDetails) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsWorkoutStarted(true);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [countdown, showWorkoutDetails]);

  const handleStartWorkout = () => {
    setShowWorkoutDetails(false);
    setCountdown(3);
    setIsWorkoutStarted(false);
  };
  return (
    <WorkoutPlanContext.Provider
      value={{
        step,
        setStep,
        stepValues,
        isWorkoutStarted,
        showWorkoutDetails,
        countdown,
        handleStartWorkout,
        toggleFavorite,
        showConfirmation,
        isFavorite
      }}
    >
      {children}
    </WorkoutPlanContext.Provider>
  );
};
