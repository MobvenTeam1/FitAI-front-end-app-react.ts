import React, { createContext } from "react";
import { PersonalInformationsContextProvider } from "../../../personal-inforations/context/PersonalInformationsContext";
import { CreateTrainingProgramForm } from "../../../personal-inforations/forms/CreateTrainingProgram";
import { CreateNutritionProgramForm } from "../../../personal-inforations/forms/CreateNutritionProgramForm";
import { paths } from "../../../../routes/paths";

// Define the shape of the context
interface HomeContextValues {
  goalValues: GoalValue[];
  createPlanValues: CreatePlanValue[];
  addPlanValues: AddPlanValue[];
  goalCompletionInfoValues: GoalCompletionInfoValue[];
  trainingCategoryValues: HomeCategoryValue[];
  nutritionCategoryValues: HomeCategoryValue[];
  aiSupportPlanValues: CreateAiSupportPlanValue[];
  personalTrainingPrograms: PersonalPropram[];
  personalNutritionPrograms: PersonalPropram[];
  aiNutritionSuggestions: aiSuggestionItem[];
  suggestionRender: (type: string) => aiSuggestionItem[];
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

interface AddPlanValue {
  icon: string;
  title: string;
  path: string;
}

interface GoalCompletionInfoValue {
  title: string;
  value: string;
}

interface HomeCategoryValue {
  img: string;
  title: string;
}

export interface CreateAiSupportPlanValue {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  form: JSX.Element;
}

export interface OptionPersonalProgramDetail {
  optionId: number;
  optionImage: string;
  optionTitle: string;
  optionSubtitle: string;
  type: string;
}

export interface OptionsPersonalProgram {
  optionTitle: string;
  optionDetails: OptionPersonalProgramDetail[];
}

export interface PersonalPropram {
  programId: number;
  programTitle: string;
  img: string;
  duration: string;
  caloriesBurned: string;
  options: OptionsPersonalProgram;
}

export interface aiSuggestionItem {
  img: string;
  title: string;
  subtitle: string;
}

// Create the context with default values
export const HomeContext = createContext<HomeContextValues>({
  goalValues: [],
  createPlanValues: [],
  addPlanValues: [],
  goalCompletionInfoValues: [],
  trainingCategoryValues: [],
  nutritionCategoryValues: [],
  aiSupportPlanValues: [],
  personalTrainingPrograms: [],
  personalNutritionPrograms: [],
  aiNutritionSuggestions: [],
  suggestionRender: () => [],
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

  const aiTraningSuggestions: aiSuggestionItem[] = [
    {
      img: "running",
      title: "Koşu",
      subtitle: "30 dakika",
    },
    {
      img: "fitness",
      title: "Fitness",
      subtitle: "45 dakika",
    },
    {
      img: "yoga",
      title: "Yoga",
      subtitle: "60 dakika",
    },
  ];

  const aiNutritionSuggestions: aiSuggestionItem[] = [
    {
      img: "food1",
      title: "Kahvaltı",
      subtitle: "Yumurta, 2 dilim ekmek",
    },
    {
      img: "food2",
      title: "Ara Öğün",
      subtitle: "Meyve, 1 bardak süt",
    },
  ];

  const addPlanValues: AddPlanValue[] = [
    {
      icon: "running",
      title: "Egzersiz Ekle",
      path: paths.dashboard.workoutAdd,
    },
    {
      icon: "fork",
      title: "Besin Ekle",
      path: paths.dashboard.nutritionAdd,
    },
  ];

  const suggestionRender = (type: string) =>
    type === "nutrition" ? aiNutritionSuggestions : aiTraningSuggestions;

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

  const aiSupportPlanValues: CreateAiSupportPlanValue[] = [
    {
      id: 1,
      img: "training",
      title: "Antrenman Planı",
      subtitle: "AI size özel plan oluştursun.",
      form: <p>Antrenman Planı</p>,
    },
    {
      id: 2,
      img: "nutrition",
      title: "Beslenme Planı",
      subtitle: "AI size özel plan oluştursun.",
      form: <p>Beslenme Planı</p>,
    },
    {
      id: 3,
      img: "water-track",
      title: "Su Takibi",
      subtitle: "AI size özel plan oluştursun.",
      form: <p>Su Takibi</p>,
    },
  ];

  const personalTrainingPrograms: PersonalPropram[] = [
    {
      programId: 1,
      programTitle: "Yoga",
      img: "personal-training",
      duration: "60 dakika",
      caloriesBurned: "100 kcal",
      options: {
        optionTitle: "Poses",
        optionDetails: [
          {
            optionId: 1,
            optionImage: "walking",
            optionTitle: "Sun Salutation",
            optionSubtitle: "Mat",
            type: "training",
          },
          {
            optionId: 2,
            optionImage: "walk",
            optionTitle: "Tree Pose",
            optionSubtitle: "Mat",
            type: "training",
          },
          {
            optionId: 3,
            optionImage: "walk-reverse",
            optionTitle: "Downward Dog",
            optionSubtitle: "Mat",
            type: "training",
          },
        ],
      },
    },
    {
      programId: 2,
      programTitle: "Cardio",
      img: "doing-yoga",
      duration: "30 minutes",
      caloriesBurned: "300 kcal",
      options: {
        optionTitle: "Exercises",
        optionDetails: [
          {
            optionId: 1,
            optionImage: "walking",
            optionTitle: "Jumping Jacks",
            optionSubtitle: "No equipment",
            type: "training",
          },
          {
            optionId: 2,
            optionImage: "walk",
            optionTitle: "Burpees",
            optionSubtitle: "No equipment",
            type: "training",
          },
          {
            optionId: 3,
            optionImage: "walk-reverse",
            optionTitle: "Mountain Climbers",
            optionSubtitle: "No equipment",
            type: "training",
          },
        ],
      },
    },
  ];

  const personalNutritionPrograms: PersonalPropram[] = [
    {
      programId: 1,
      programTitle: "Kahvaltı",
      img: "breakfast",
      duration: "Hemen",
      caloriesBurned: "95 kcal",
      options: {
        optionTitle: "Besinler",
        optionDetails: [
          {
            optionId: 1,
            optionImage: "food4",
            optionTitle: "Badem",
            optionSubtitle: "5 tane, 75 kcal",
            type: "nutrition",
          },
          {
            optionId: 2,
            optionImage: "food5",
            optionTitle: "Ceviz İçi",
            optionSubtitle: "3 tane, 20 kcal",
            type: "nutrition",
          },
        ],
      },
    },
    {
      programId: 2,
      programTitle: "Ara Öğün",
      img: "snack",
      duration: "Günde 3 kez",
      caloriesBurned: "2600 kcal",
      options: {
        optionTitle: "Yemekler",
        optionDetails: [
          {
            optionId: 1,
            optionImage: "food1",
            optionTitle: "Tavuk Pilav",
            optionSubtitle: "her porsiyon, 500 kcal",
            type: "nutrition",
          },
          {
            optionId: 2,
            optionImage: "food2",
            optionTitle: "Yumurta",
            optionSubtitle: "her adet, 70 kcal",
            type: "nutrition",
          },
          {
            optionId: 3,
            optionImage: "food3",
            optionTitle: "Salata",
            optionSubtitle: "her porsiyon, 100 kcal",
            type: "nutrition",
          },
        ],
      },
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
        aiSupportPlanValues,
        personalTrainingPrograms,
        personalNutritionPrograms,
        aiNutritionSuggestions,
        suggestionRender
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
