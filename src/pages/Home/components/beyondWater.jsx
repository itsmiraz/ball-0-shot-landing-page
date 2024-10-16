import { motion } from "framer-motion"; // Import useInView from framer-motion
// import { useRef } from "react"; // Import useRef to create a reference for the section
import centerBubble from "../../../assets/images/center-bubbles.webp";
import antiLacing from "../../../assets/images/anti-lacing.webp";
import convienence from "../../../assets/images/convienence.webp";
import ecoFriendly from "../../../assets/images/eco-friendly.webp";
import vegan from "../../../assets/images/vegan.webp";
import LB from "../../../components/ui/lineBreak";
import CenterBubblesMobile from "../../../assets/images/mobile-bubbles-image.webp";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { slideAnimation } from "../../../lib/motion";

const BeyondWater = () => {
  // Create a ref for the section
  // const sectionRef = useRef(null);
  const [sectionRef, inView] = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.2, // Adjust this threshold as needed
  });

  // State to control whether animations should play
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
  // Use the useInView hook to track the visibility of the section
  // const isInView = useInView(sectionRef, { once: true });
  return (
    <div id="specs" ref={sectionRef} className="pb-[100px] pt-[45px]">
      <div className="pt-[188px] md:block hidden relative">
        {/* anti-lacing */}
       

        <img
          src={antiLacing}
          className="absolute top-10 left-1/4 max-w-[225px]"
          alt=""
        />

        <img
          src={convienence}
          className="absolute  bottom-0 left-0 max-w-[334px]"
          alt=""
        />

        <img
          src={ecoFriendly}
          className="absolute  top-20 right-0 max-w-[334px]"
          alt=""
        />
        <img
          src={vegan}
          className="absolute  -bottom-20 -right-0 max-w-[167px]"
          alt=""
        />

        <img className="mx-auto max-w-[635px]" src={centerBubble} alt="" />
      </div>

      <img
        className="md:hidden block mx-auto"
        src={CenterBubblesMobile}
        alt=""
      />
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("down")}
        className="px-[20px]"
      >
        <h2 className="text-[#323232] pt-10 font-bold text-[24px] md:text-[40px] text-center pb-[13px]">
          Not just water
        </h2>
        <p className="text-[16px] md:text-[24px] text-[#5D5D5D] text-center">
          Ball-O-Shot® offers more than just water. This innovative product can
          encapsulate a <LB /> variety of beverages, including water, juice,
          energy drinks, and even alcohol, all within <LB /> an eco-friendly,
          sustainable solution. It’s a versatile option designed to meet
          different needs <LB /> while prioritizing environmental
          responsibility.
        </p>
      </motion.div>
    </div>
  );
};

export default BeyondWater;
