import { useContext } from "react";
import { HomeContext, HomeContextProvider } from "./home/context/HomeContext";

import { CreatePlan } from "./home/components/CreatePlan";
import { DailyGoalsView } from "./home/views/DailyGoalsView";
import { GoalCompletionView } from "./home/views/GoalCompletionView";
import { Categories } from "./home/views/Categories";

export const HomeView: React.FC = () => {
  const { createPlanValues, trainingCategoryValues, nutritionCategoryValues } = useContext(HomeContext);

  return (
    <HomeContextProvider>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 flex flex-col gap-3">
          <DailyGoalsView />
          <GoalCompletionView />
          <Categories header="Antrenman" values={trainingCategoryValues} col="col-span-3" />
          <Categories header="Öğün" values={nutritionCategoryValues} col="col-span-6" />
          
        </div>

        <div className="col-span-5">
          {createPlanValues.map((plan, index) => (
            <div key={index} className="col-span-6">
              <CreatePlan {...plan} />
            </div>
          ))}
        </div>
      </div>
    </HomeContextProvider>
  );
};
