import React from "react";
import CustomBreadcrumbs from "../../components/customs/custom-breadcrumbs";
import { paths } from "../../routes/paths";

export const NutritionAdd: React.FC = () => {
  return (
    <CustomBreadcrumbs
      heading="Besin Ekle"
      links={[
        { name: "Dashboard", href: paths.dashboard.root },
        { name: "Besin Ekle" },
      ]}
    />
  );
};
