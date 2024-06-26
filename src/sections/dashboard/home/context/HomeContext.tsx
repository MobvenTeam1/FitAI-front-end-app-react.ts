import React, { createContext, useContext, useState } from "react";
import { PersonalInformationsContextProvider } from "../../../personal-inforations/context/PersonalInformationsContext";
import {
  CreateTrainingProgramForm,
  CreateWorkoutPlanValuesSend,
} from "../../../personal-inforations/forms/CreateTrainingProgram";
import { CreateNutritionProgramForm } from "../../../personal-inforations/forms/CreateNutritionProgramForm";
import { paths } from "../../../../routes/paths";
import {
  AddPlanValue,
  AxiosQueryParams,
  CreateAiSupportPlanValue,
  CreatePlanValue,
  GoalCompletionInfoValue,
  GoalValue,
  HomeCategoryValue,
  HomeContextValues,
  ModalStates,
  PersonalPropram,
  aiSuggestionItem,
} from "./types";
import { createAiWorkoutRequest, getAiWorkoutsRequest } from "../../../../api";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../../../auth/AuthContext";

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
  modalStates: {},
  handleOpenModal: () => {},
  handleCloseModal: () => {},
  axiosQueryVariables: {
    createAiWorkoutRequest: {
      isLoading: false,
      mutate: () => {},
    },
    getAiWorkoutsRequest: {
      isLoading: false,
      mutate: () => {},
    },
  },
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const HomeContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [modalStates, setModalStates] = useState<ModalStates>({});

  const handleOpenModal = (id: string) => {
    setModalStates((prevStates) => ({ ...prevStates, [id]: true }));
  };

  const handleCloseModal = (id: string) => {
    setModalStates((prevStates) => ({ ...prevStates, [id]: false }));
  };

  // ** api requests

  const { mutate: getWorkoutAiPlanMutate, isPending: getWorkoutAiPlanLoading } =
    useMutation({
      mutationFn: getAiWorkoutsRequest,
      onSuccess: (data) => {
        console.log("işlem başarılı getAiWorkoutsRequest : ", data);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const {
    mutate: createWorkoutAiPlanMutate,
    isPending: createWorkoutAiPlanLoading,
  } = useMutation({
    mutationFn: createAiWorkoutRequest,
    onSuccess: (data) => {
      console.log("registrationRequest data", data);
      toast.success("Antreman Planı Oluşturma Başarılı");
      handleCloseModal(createPlanValues[0].modalId);
      getWorkoutAiPlanMutate();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const axiosQueryVariables: AxiosQueryParams = {
    createAiWorkoutRequest: {
      isLoading: createWorkoutAiPlanLoading,
      mutate: createWorkoutAiPlanMutate as (
        variables?: CreateWorkoutPlanValuesSend
      ) => void,
    },
    getAiWorkoutsRequest: {
      isLoading: getWorkoutAiPlanLoading,
      mutate: getWorkoutAiPlanMutate,
    },
  };

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
      value: `${user?.dailyKcalGoal}`,
    },
  ];

  const createPlanValues: CreatePlanValue[] = [
    {
      icon: "kcal",
      title: "Kişiselleştirilmiş Antrenman",
      modalId: "training-modal",
      form: (
        <PersonalInformationsContextProvider>
          <CreateTrainingProgramForm />
        </PersonalInformationsContextProvider>
      ),
    },
    {
      icon: "food-plan",
      title: "Kişiselleştirilmiş Beslenme",
      modalId: "nutrition-modal",
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
      value: `${user?.currentWeight} kg`,
    },
    {
      title: "Hedef Kilo",
      value: `${user?.targetWeight} kg`,
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
            optionTitle: "Bench Press",
            optionSubtitle: "4 set, 10 tekrar ",
            type: "training",
          },
          {
            optionId: 2,
            optionImage: "walk",
            optionTitle: "Hammer Curls",
            optionSubtitle: "3 set, 12tekrar ",
            type: "training",
          },
          {
            optionId: 3,
            optionImage: "walk-reverse",
            optionTitle: "Leg Press",
            optionSubtitle: "3 set, maxiumum tekrar ",
            type: "training",
          },
          {
            optionId: 3,
            optionImage: "walk-reverse",
            optionTitle: "Pull Ups",
            optionSubtitle: "3 set, 15 tekrar ",
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
        suggestionRender,
        handleOpenModal,
        handleCloseModal,
        modalStates,
        axiosQueryVariables,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

// const sss = [
//   {
//     title: "Yoga",
//     img: "ssss"
//   }
// ]


// const details = {
//   exercise_1: "details",
//   exercise_2: "details",
//   exercise_3: "details",
//   exercise_4: "details",
//   exercise_5: "details",
//   exercise_6: "details"
// }

// const temo3 = [
//   {
//     exercise: "exercise_1",
//     details : "details"
//   }
// ]

// {"fitness_antrenman":[{"day":"day_one","program":{"exercise_1":"Barbell Bench Press - 4 sets, 8-10 reps","exercise_2":"Incline Dumbbell Press - 3 sets, 10-12 reps","exercise_3":"Chest Flyes - 3 sets, 12-15 reps","exercise_4":"Push-ups - 3 sets, max reps","exercise_5":"Tricep Dips - 3 sets, 10-12 reps","exercise_6":"Plank - 3 sets, 30 seconds hold"}},{"day":"day_two","program":{"exercise_1":"Seated Military Press - 4 sets, 8-10 reps","exercise_2":"Lateral Raises - 3 sets, 12-15 reps","exercise_3":"Front Raises - 3 sets, 10-12 reps","exercise_4":"Push Press - 3 sets, 8-10 reps","exercise_5":"Tricep Kickbacks - 3 sets, 12-15 reps","exercise_6":"Side Planks - 3 sets, 30 seconds each side"}}]}


// const temp2 = [
//   {
//     title: "Yoga",
//     desc: "60dk 100kcal",
//     details: [
//       {
//         exzesicze: "Chest Press",
//         desc: " 4 set, 12 tekrar",
//       },
//       {
//         exzesicze: "Barbell Rows",
//         desc: " 4 set, 12 tekrar",
//       },
//     ],
//   },
//   {
//     title: "Cardio",
//     desc: "60dk 100kcal",
//     details: [
//       {
//         title: "Squats",
//         desc: " 4 set, 12 tekrar",
//       },
//       {
//         title: "Hamstring Curls",
//         desc: " 4 set, 12 tekrar",
//       },
//     ],
//   },
// ];
