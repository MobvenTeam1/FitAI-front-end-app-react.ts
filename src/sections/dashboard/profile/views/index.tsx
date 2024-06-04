import React, { useContext } from "react";
import CustomBreadcrumbs from "../../../../components/customs/custom-breadcrumbs";
import { paths } from "../../../../routes/paths";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { ProfileContext } from "../context/ProfileContext";
import PurposeGainView from "./PurposeGainView";

const ProfileView: React.FC = () => {
  const { tabValues, selectedTab, handleChangeTab } =
    useContext(ProfileContext);
  return (
    <div className="flex flex-col gap-10">
      <CustomBreadcrumbs
        heading="Profil"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Profil", href: paths.dashboard.profile },
        ]}
      />
      <CustomTabs
        values={tabValues}
        selectedTab={selectedTab}
        onClick={handleChangeTab}
      />

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <PurposeGainView />
        </div>
        <div className="col-span-8">y</div>
      </div>
    </div>
  );
};

export default ProfileView;
