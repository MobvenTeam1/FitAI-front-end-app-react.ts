import React, { createContext } from "react";
import { WorkoutPlanContextValues } from "./types";

// Create the context with default values
export const WorkoutPlanContext = createContext<WorkoutPlanContextValues>({});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const WorkoutPlanContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  return (
    <WorkoutPlanContext.Provider value={{}}>
      {children}
    </WorkoutPlanContext.Provider>
  );
};
