import { useContext } from "react";
import { RadialChart } from "../../components/charts/RadialChart";
import { HomeContext, HomeContextProvider } from "../../context/HomeContext";
import { CreatePlan } from "../../sections/dashboard/CreatePlan";
import { GoalInfo } from "../../sections/dashboard/GoalInfo";

export const HomeView: React.FC = () => {
  const { goalValues, createPlanValues } = useContext(HomeContext);

  console.log(goalValues, createPlanValues);

  return (
    <HomeContextProvider>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7 flex flex-col gap-3">
          {/* Daily Goals */}
          <p className="text-lg font-bold">Günlük Hedefler</p>
          <div className="grid grid-cols-12 gap-5">
            {goalValues.map((goal, index) => (
              <div key={index} className="col-span-4">
                <GoalInfo {...goal} />
              </div>
            ))}
          </div>
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
