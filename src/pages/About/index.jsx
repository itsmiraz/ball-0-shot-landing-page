import Expertise from "./components/expertise";
import Gallery from "./components/gallery";
import AboutHeader from "./components/header";
import Hero from "./components/hero";
import Testimonials from "./components/testimonials";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <Hero />
      <Expertise />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default About;
