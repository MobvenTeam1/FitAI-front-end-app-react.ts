import React from "react";
import { paths } from "../../routes/paths";
import CustomBreadcrumbs from "../../components/customs/custom-breadcrumbs";
import { WorkoutAddView } from "../../sections/dashboard/workoutAdd/views";

export const WorkoutAdd: React.FC = () => {
  return (
    <>
      <CustomBreadcrumbs
        heading="Antreman Ekle"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Antreman Ekle" },
        ]}
      />

      <WorkoutAddView />
    </>
  );
};
