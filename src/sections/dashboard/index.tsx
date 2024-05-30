import { useContext } from "react";
import { RadialChart } from "../../components/charts/RadialChart";
import { HomeContext, HomeContextProvider } from "./home/context/HomeContext";

import { CreatePlan } from "./home/components/CreatePlan";
import { DailyGoalsView } from "./home/views/DailyGoalsView";
import { GoalCompletionView } from "./home/views/GoalCompletionView";

export const HomeView: React.FC = () => {
  const { createPlanValues } = useContext(HomeContext);

  return (
    <HomeContextProvider>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 flex flex-col gap-3">
          <DailyGoalsView />
          <GoalCompletionView />
        </div>

        <div className="col-span-5">
          <RadialChart size="md" />
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
