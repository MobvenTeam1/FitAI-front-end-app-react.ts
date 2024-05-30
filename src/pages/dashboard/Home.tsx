import { HomeContextProvider } from "../../context/HomeContext";
import { HomeView } from "../../sections/dashboard";

export const Home: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomeView />
    </HomeContextProvider>
  );
};
