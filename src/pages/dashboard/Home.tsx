import { RadialChart } from "../../components/charts/RadialChart";
import { CreatePlan } from "../../sections/dashboard/CreatePlan";
import { GoalInfo } from "../../sections/dashboard/GoalInfo";
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
      icon: "carbs",
      title: "Günlük Hedef",
      value: "-2500",
    },
  ];

  const createPlanValues = [
    {
      icon: "kcal",
      title: "Kişiselleştirilmiş Antrenman",
      form: <CreateTrainingProgramForm />,
    },
    {
      icon: "food-plan",
      title: "Kişiselleştirilmiş Beslenme",
    },
  ];

  return (
    <div className="px-24 flex flex-col gap-8">
      Home
      <CreateTrainingProgramForm />
      <RadialChart size="md" />
      <div className="grid grid-cols-12 gap-2">
        {goalValues.map((goal, index) => (
          <div key={index} className="col-span-4">
            <GoalInfo {...goal} />
          </div>
        ))}
      </div>
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
