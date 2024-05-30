import { RadialChart } from "../../components/charts/RadialChart";
import { CreatePlan } from "../../sections/dashboard/CreatePlan";
import { GoalInfo } from "../../sections/dashboard/GoalInfo";
import { PersonalInformationsContextProvider } from "../../sections/personal-inforations/context/PersonalInformationsContext";
import { CreateNutritionProgramForm } from "../../sections/personal-inforations/forms/CreateNutritionProgramForm";
import { CreateTrainingProgramForm } from "../../sections/personal-inforations/forms/CreateTrainingProgram";

export const Home: React.FC = () => {
  const goalValues = [
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

  const createPlanValues = [
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
    <div className="px-24 flex flex-col gap-8">
      Home
      {/* charts */}
      <RadialChart size="md" />
      {/* goal values */}
      <div className="grid grid-cols-12 gap-2">
        {goalValues.map((goal, index) => (
          <div key={index} className="col-span-4">
            <GoalInfo {...goal} />
          </div>
        ))}
      </div>
      {/* create plans */}
      <div className="grid grid-cols-12 gap-2">
        {createPlanValues.map((plan, index) => (
          <div key={index} className="col-span-6">
            <CreatePlan {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
};
