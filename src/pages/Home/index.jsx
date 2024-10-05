import Clients from "./components/clients"
import EcoSolutions from "./components/ecoSolutions"
import Hero from "./components/hero"
import History from "./components/history"
import Missions from "./components/missions"
import NotJustWater from '../../assets/icons/notjustWater.svg'
import CTA from "./components/cta"
const Home = () => {
  return (
    <div>

     <Hero/>
     <EcoSolutions/>
     <NotJustWater/>
     <Missions/>
     <History/>
     <Clients/>
     <CTA/>
    </div>
  )
}

export default Home