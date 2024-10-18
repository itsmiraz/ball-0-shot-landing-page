/* eslint-disable react/no-unescaped-entities */
import LB from "../../../components/ui/lineBreak";
import splashImage from "../../../assets/images/splash-exploded.webp";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { slideAnimation } from "../../../lib/motion";
import { motion } from "framer-motion";
const Hero = () => {
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
      ref={sectionRef}
      className="relative max-w-[1440px] mx-auto min-h-[521px]  bg-gradient-to-t from-[#F4F4F4] to-[#FFFFFF] md:pb-[66px] pt-[67px] md:py-[120px]"
    >
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("up")}
        className="px-4 md:pl-[95px]"
      >
        <h1 className="text-[#282828] md:text-start text-center  relative z-20 leading-[35px] md:leading-[60px] text-[28px] md:text-[48px] font-bold">
          Own the Experience with Ball-O-Shot
        </h1>
        <p className="text-[16px] md:text-[24px] leading-[20px] md:leading-[30px] relative z-20  text-[#5D5D5D]  pt-[16px] pb-[41px]">
          Let's craft the perfect order, customized for your venue or event
          type. <LB /> Book a call with our team today to get started on a
          seamless experience.
        </p>
        <button className="bg-[#303030] hover:bg-[#303030]/90 duration-200 ease-in-out transition-all  md:w-fit md:mx-0 w-full mx-auto justify-center button-inner-shadow h-[58px] md:h-[75px] items-center rounded-[10px] md:px-[69px] py-5 text-[#FFFFFF] text-18px md:text-[24px] font-semibold flex gap-2.5">
          Book A Call To Order
        </button>
      </motion.div>

      <img
        className="md:absolute z-10 right-0 bottom-0"
        src={splashImage}
        alt=""
      />
    </div>
  );
};

export default Hero;
