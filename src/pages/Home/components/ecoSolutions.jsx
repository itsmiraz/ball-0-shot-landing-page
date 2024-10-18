/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import explodedImage from "../../../assets/images/EXPLODED.webp";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../lib/motion";
const EcoSolutions = () => {
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
    <div
      id="about"
      ref={sectionRef}
      className="px-5 md:px-20 max-w-[1527px] mx-auto pt-[109px] justify-between flex md:flex-row flex-col-reverse gap-[23px] md:gap-20 items-center"
    >
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("left")}
        className="w-[95%] md:w-[50%]"
      >
        <p className="text-[18px] leading-[20px] md:text-start text-center md:text-[24px] text-[#5D5D5D] font-medium md:leading-[30.24px]">
          Eco Friendly Water Tap
        </p>
        <h2 className="text-[28px] md:text-start text-center  md:text-[40px] pt-[13px] md:pt-6 font-bold text-[#282828] leading-[50px]">
          What is Ball-O-Shot
        </h2>
        <p className="text-[16px] md:leading-normal leading-[20px] md:text-[24px] py-[13px] md:py-8 text-[#5D5D5D]">
          Ball-O-Shot® revolutionizes how you enjoy beverages with its
          eco-friendly algae-based sphere. Each Ball-O-Shot is biodegradable,
          vegan, gluten-free, and non-GMO, making it suitable for a wide range
          of dietary preferences and lifestyles. It's a product designed with
          sustainability and health in mind, offering a responsible alternative.
        </p>
        <Link to={"/about"}>
          {" "}
          <button className="bg-[#303030] hover:bg-[#303030]/90 duration-200 ease-in-out transition-all  w-full button-inner-shadow items-center rounded-[9px]  py-[14px] md:py-5 text-[#FFFFFF] text-[15px] md:text-[20px] font-semibold md:w-[343px] leading-[25px] text-center">
            Learn More
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("right")}
        className="w-[100%] md:w-[50%]"
      >
        <img className="w-full" loading="lazy" src={explodedImage} alt="" />
      </motion.div>
    </div>
  );
};

export default EcoSolutions;
