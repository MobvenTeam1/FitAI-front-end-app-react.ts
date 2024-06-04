import React from "react";
import { paths } from "../../routes/paths";
import CustomBreadcrumbs from "../../components/customs/custom-breadcrumbs";
import { WorkoutAddView } from "../../sections/dashboard/workoutAdd/views";
import { WorkoutAddContextProvider } from "../../sections/dashboard/workoutAdd/context/WorkoutAddContext";

const WorkoutAdd: React.FC = () => {
  return (
    <WorkoutAddContextProvider>
      <CustomBreadcrumbs
        heading="Antreman Ekle"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Antreman Ekle" },
        ]}
      />

      <WorkoutAddView />
    </WorkoutAddContextProvider>
  );
};

export default WorkoutAdd;
