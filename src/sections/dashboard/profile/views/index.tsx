import React, { useContext } from "react";
import CustomBreadcrumbs from "../../../../components/customs/custom-breadcrumbs";
import { paths } from "../../../../routes/paths";
import { CustomTabs } from "../../../../components/customs/custom-tabs";
import { ProfileContext } from "../context/ProfileContext";
import PurposeGainView from "./PurposeGainView";
import { OutletSectionValue } from "../context/types";

const ProfileView: React.FC = () => {
  const { tabValues, selectedTab, handleChangeTab, outletSectionValues } =
    useContext(ProfileContext);

  const selectedSection: OutletSectionValue | undefined =
    outletSectionValues.find((item) => item.id === selectedTab.id);

  return (
    <div className="flex flex-col gap-10">
      <CustomBreadcrumbs
        heading="Profil"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Profil", href: paths.dashboard.profile },
          { name: selectedSection?.title || "Kişileştir" },
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
        <div className="col-span-8">{selectedSection?.section}</div>
      </div>
    </div>
  );
};

export default ProfileView;
