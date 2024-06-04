import { HomeContextProvider } from "../../sections/dashboard/home/context/HomeContext";
import { HomeView } from "../../sections/dashboard/home/views";

const Home: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomeView />
    </HomeContextProvider>
  );
};

export default Home;
