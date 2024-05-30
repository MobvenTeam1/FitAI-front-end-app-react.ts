import React, { createContext } from "react";
import { PersonalInformationsContextProvider } from "../sections/personal-inforations/context/PersonalInformationsContext";
import { CreateTrainingProgramForm } from "../sections/personal-inforations/forms/CreateTrainingProgram";
import { CreateNutritionProgramForm } from "../sections/personal-inforations/forms/CreateNutritionProgramForm";

// Define the shape of the context
interface HomeContextValues {
  goalValues: GoalValue[];
  createPlanValues: CreatePlanValue[];
}

// Define the shape of the goalValues
interface GoalValue {
  icon: string;
  title: string;
  value: string;
}

// Define the shape of the createPlanValues
interface CreatePlanValue {
  icon: string;
  title: string;
  form: JSX.Element;
}

// Create the context with default values
export const HomeContext = createContext<HomeContextValues>({
  goalValues: [],
  createPlanValues: [],
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const HomeContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const goalValues: GoalValue[] = [
    {
      icon: "kcal",
      title: "Alınan Kalori",
      value: "950",
    },
    {
      icon: "kcal-fire",
      title: "Harcanan Kalori",
      value: "1300",
    },
    {
      icon: "dart",
      title: "Günlük Hedef",
      value: "-2500",
    },
  ];

  const createPlanValues: CreatePlanValue[] = [
    {
      icon: "kcal",
      title: "Kişiselleştirilmiş Antrenman",
      form: (
        <PersonalInformationsContextProvider>
          <CreateTrainingProgramForm />
        </PersonalInformationsContextProvider>
      ),
    },
    {
      icon: "food-plan",
      title: "Kişiselleştirilmiş Beslenme",
      form: (
        <PersonalInformationsContextProvider>
          <CreateNutritionProgramForm />
        </PersonalInformationsContextProvider>
      ),
    },
  ];
  return (
    <HomeContext.Provider value={{ goalValues, createPlanValues }}>
      {children}
    </HomeContext.Provider>
  );
};
