import React from "react";
import CustomBreadcrumbs from "../../components/customs/custom-breadcrumbs";
import { paths } from "../../routes/paths";
import WorkoutPlanView from "../../sections/dashboard/workoutPlan/views";
import { WorkoutPlanContextProvider } from "../../sections/dashboard/workoutPlan/context/WorkoutPlanContext";

const WorkoutPlan: React.FC = () => {
  return (
    <WorkoutPlanContextProvider>
      <CustomBreadcrumbs
        heading="Antreman Planı"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Antreman Planı", href: paths.dashboard.workoutPlan },
        ]}
      />

      <WorkoutPlanView />
    </WorkoutPlanContextProvider>
  );
};

export default WorkoutPlan;
