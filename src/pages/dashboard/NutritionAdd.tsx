import React from "react";
import { paths } from "../../routes/paths";
import CustomBreadcrumbs from "../../components/customs/custom-breadcrumbs";

import { NutritionAddContextProvider } from "../../sections/dashboard/nutritionAdd/context/NutritionAddContext";
import { NutritionAddView } from "../../sections/dashboard/nutritionAdd/views";

const NutritionAdd: React.FC = () => {
  return (
    <NutritionAddContextProvider>
      <CustomBreadcrumbs
        heading="Besin Ekle"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Besin Ekle" },
        ]}
      />

      <NutritionAddView />
    </NutritionAddContextProvider>
  );
};

export default NutritionAdd;
