/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import team from "../../../assets/images/team.webp";
import LB from "../../../components/ui/lineBreak";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../lib/motion";
const CTA = () => {
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

  return (
    <div ref={sectionRef} id="cta" className="pt-[65px]">
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("up")}
        className="px-3"
      >
        <h2 className="text-[#282828] text-center text-[24px] md:text-[36px] font-bold">
          Ready to Elevate Your Event?
        </h2>
        <p className="text-[16px] md:text-[24px] pt-[16px] md:pt-[21px] pb-[25px] md:pb-[39px] text-center">
          Join the revolution in beverage experiences with Ball-O-Shot! Whether
          you're hosting a <LB /> music festival, a sports event, or a private
          party.
        </p>
        <button className="bg-[#303030] hover:bg-[#303030]/90 duration-200 ease-in-out transition-all  text-center mx-auto button-inner-shadow h-[60px] md:h-[78px] items-center rounded-full px-[69px] py-[14px] md:py-5 text-[#FFFFFF]  text-[16px] md:text-[24px] font-semibold flex gap-2.5">
          Call Us Now
        </button>
      </motion.div>

      <motion.img
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("up")}
        src={team}
        className="mx-auto pt-[64px]"
        alt="team"
      ></motion.img>
    </div>
  );
};

export default CTA;
