import { HomeContextProvider } from "../../sections/dashboard/home/context/HomeContext";
import { HomeView } from "../../sections/dashboard";

export const Home: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomeView />
    </HomeContextProvider>
  );
};
