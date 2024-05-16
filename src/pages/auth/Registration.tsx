import { PersonalInformations } from "../../sections/personal-inforations";
import { PersonalInformationsContextProvider } from "../../sections/personal-inforations/context/PersonalInformationsContext";

export const Registration: React.FC = () => {
  return (
    <div>
      <PersonalInformationsContextProvider>
        <PersonalInformations />
      </PersonalInformationsContextProvider>
    </div>
  );
};
