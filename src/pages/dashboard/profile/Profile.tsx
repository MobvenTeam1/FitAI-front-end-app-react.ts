import React from "react";
import CustomBreadcrumbs from "../../../components/customs/custom-breadcrumbs";
import { paths } from "../../../routes/paths";


export const Profile: React.FC = () => {
  return (
    <div>
      <CustomBreadcrumbs
        heading="Profil"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Profil", href: paths.dashboard.profile },
        ]}
      />
    </div>
  );
};
