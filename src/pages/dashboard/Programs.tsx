import { PersonalInformations } from "../../sections/personal-inforations";
import { PersonalInformationsContextProvider } from "../../sections/personal-inforations/context/PersonalInformationsContext";

export const Programs: React.FC = () => {
  return (
    <div>
      <PersonalInformationsContextProvider>
        <PersonalInformations />
      </PersonalInformationsContextProvider>
    </div>
  );
};
