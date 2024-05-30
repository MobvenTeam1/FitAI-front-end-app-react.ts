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
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-7 flex flex-col gap-3">
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
  );
};
