import React from "react";
import { ProfileContextProvider } from "../../sections/dashboard/profile/context/ProfileContext";
import ProfileView from "../../sections/dashboard/profile/views";

const Profile: React.FC = () => {
  return (
    <ProfileContextProvider>
      <ProfileView />
    </ProfileContextProvider>
  );
};

export default Profile;
