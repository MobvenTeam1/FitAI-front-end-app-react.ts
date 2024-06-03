import { useContext } from "react";
import { HomeContext, HomeContextProvider } from "../context/HomeContext";
import { DailyGoalsView } from "./DailyGoalsView";
import { CategoriesViews } from "./CategoriesViews";
import { GoalCompletionView } from "./GoalCompletionView";
import { CreateAiPlanView } from "./CreateAiPlanView";
import { CalendarView } from "./CalendarView";
import { CreatePlanView } from "./CreatePlanView";
import { PersonalProgramView } from "./PersonalProgramView";
import { PuroseGainView } from "./PuroseGainView";

export const HomeView: React.FC = () => {
  const {
    trainingCategoryValues,
    nutritionCategoryValues,
    personalTrainingPrograms,
    personalNutritionPrograms,
  } = useContext(HomeContext);

  return (
    <HomeContextProvider>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8 flex flex-col gap-3">
          <DailyGoalsView />
          <GoalCompletionView />
          <CategoriesViews
            header="Antrenman"
            values={trainingCategoryValues}
            col="col-span-3"
          />
          <CategoriesViews
            header="Öğün"
            values={nutritionCategoryValues}
            col="col-span-6"
          />
        </div>

        <div className="col-span-4 flex flex-col gap-3">
          <CreateAiPlanView />
          <CalendarView />
          <CreatePlanView />
          <PersonalProgramView
            values={personalTrainingPrograms}
            header="Kişiselleştirilmiş Antrenman Planlanın"
          />
          <PersonalProgramView
            values={personalNutritionPrograms}
            header="Kişiselleştirilmiş Beslenme Planlanın"
          />
          <PuroseGainView />
        </div>
      </div>
    </HomeContextProvider>
  );
};
