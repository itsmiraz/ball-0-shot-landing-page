import Clients from "./components/clients";
import EcoSolutions from "./components/ecoSolutions";
import Hero from "./components/hero";
import History from "./components/history";
import Missions from "./components/missions";
import CTA from "./components/cta";
import BeyondWater from "./components/beyondWater";
import Awards from "./components/awards";
import Occasion from "./components/Occasion";
const Home = () => {
  return (
    <div>
      <Hero />
      <EcoSolutions />
      <BeyondWater />
      <Missions />
      <History />
      <Occasion />
      <Awards />
      <Clients />
      <CTA />
    </div>
  );
};

export default Home;
