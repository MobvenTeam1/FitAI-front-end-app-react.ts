import { useContext } from "react";
import { HomeContext, HomeContextProvider } from "./home/context/HomeContext";

import { DailyGoalsView } from "./home/views/DailyGoalsView";
import { GoalCompletionView } from "./home/views/GoalCompletionView";
import { CategoriesViews } from "./home/views/CategoriesViews";
import { CalendarView } from "./home/views/CalendarView";
import { CreatePlanView } from "./home/views/CreatePlanView";

export const HomeView: React.FC = () => {
  const { trainingCategoryValues, nutritionCategoryValues } =
    useContext(HomeContext);

  return (
    <HomeContextProvider>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 flex flex-col gap-3">
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

        <div className="col-span-5 flex flex-col gap-3 pt-6">
          <CalendarView />
          <CreatePlanView />
        </div>
      </div>
    </HomeContextProvider>
  );
};
