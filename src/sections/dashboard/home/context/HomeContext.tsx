import React, { createContext } from "react";
import { PersonalInformationsContextProvider } from "../../../personal-inforations/context/PersonalInformationsContext";
import { CreateTrainingProgramForm } from "../../../personal-inforations/forms/CreateTrainingProgram";
import { CreateNutritionProgramForm } from "../../../personal-inforations/forms/CreateNutritionProgramForm";

// Define the shape of the context
interface HomeContextValues {
  goalValues: GoalValue[];
  createPlanValues: CreatePlanValue[];
  addPlanValues: CreatePlanValue[];
  goalCompletionInfoValues: GoalCompletionInfoValue[];
  trainingCategoryValues: HomeCategoryValue[];
  nutritionCategoryValues: HomeCategoryValue[];
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

interface GoalCompletionInfoValue {
  title: string;
  value: string;
}

interface HomeCategoryValue {
  img: string;
  title: string;
}

// Create the context with default values
export const HomeContext = createContext<HomeContextValues>({
  goalValues: [],
  createPlanValues: [],
  addPlanValues: [],
  goalCompletionInfoValues: [],
  trainingCategoryValues: [],
  nutritionCategoryValues: [],
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

  const addPlanValues: CreatePlanValue[] = [
    {
      icon: "running",
      title: "Egzersiz Ekle",
      form: <h1>Egzersiz</h1>,
    },
    {
      icon: "fork",
      title: "Besin Ekle",
      form: <h1>Besin</h1>,
    },
  ];

  const goalCompletionInfoValues: GoalCompletionInfoValue[] = [
    {
      title: "Mevcut Kilo",
      value: "50 kg",
    },
    {
      title: "Hedef Kilo",
      value: "45 kg",
    },
    {
      title: "Hedeflenen Tarih",
      value: "18 Temmuz",
    },
  ];

  const trainingCategoryValues: HomeCategoryValue[] = [
    {
      img: "plates",
      title: "Pilates",
    },
    {
      img: "fitness",
      title: "Fitness",
    },
    {
      img: "hiit",
      title: "HIIT",
    },
    {
      img: "yoga",
      title: "Yoga",
    },
  ];

  const nutritionCategoryValues: HomeCategoryValue[] = [
    {
      img: "breakfast",
      title: "Kahvaltı",
    },
    {
      img: "snack",
      title: "Atıştırmalık",
    },
  ];

  return (
    <HomeContext.Provider
      value={{
        goalValues,
        createPlanValues,
        addPlanValues,
        goalCompletionInfoValues,
        trainingCategoryValues,
        nutritionCategoryValues,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
