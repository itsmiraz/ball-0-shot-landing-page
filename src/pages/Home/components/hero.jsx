import heroBallImage from "../../../assets/images/rounded-ball.png";
import GrayDot from "../../../assets/icons/grayDot.svg";
import GofundMe from "../../../assets/icons/goFundme.svg";
// import LB from "../../../components/ui/lineBreak";
// import MobileHeroBall from '../../../assets/images/hero-mobile-drop.webp'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../lib/motion";

const Hero = () => {
  const expertise = [
    "Vegan",
    "Eco-Friendly",
    "Anti-Lacing Technology",
    "Convenience",
    "Visibility",
  ];

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

  const expertiseList = [
    ...expertise,
    ...expertise,
    ...expertise,
    ...expertise,
  ];
  return (
    <div ref={sectionRef} className="pt-[84px] relative">
      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("up")}
      >
        <h1 className="text-[#282828] text-[28px] md:text-[48px] text-center font-semibold leading-[35px] md:leading-[60px]">
          Experience the Fun & Convenience <br /> of Ball-O-Shot
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center  gap-x-[22px] gap-y-[16px] pt-[38px] pb-[48px]">
          <button className="border hover:bg-gray-100 duration-200 ease-in-out transition-all border-[#303030] h-[58px] md:h-[78px] items-center rounded-full px-[42px] py-4 text-[#2F2F2F] text-[18px] md:text-[24px] font-semibold flex gap-2.5">
            <span className="w-[32px] md:w-[43px]">
              <GofundMe />
            </span>{" "}
            Go Fund Me{" "}
          </button>
          <button className="bg-[#303030] hover:bg-[#303030]/90 duration-200 ease-in-out transition-all  button-inner-shadow h-[58px] md:h-[78px] items-center rounded-full px-[69px] py-5 text-[#FFFFFF] text-18px md:text-[24px] font-semibold flex gap-2.5">
            Book A Call To Order
          </button>
        </div>
      </motion.div>

      <div className="overflow-hidden h-[250px] md:h-[400px] pt-20">
        <img
          className="mx-auto slow-spin   w-[350px] md:w-[767px] -translate-y-80  md:-translate-y-40 "
          src={heroBallImage}
          alt="hero-image"
        />
        {/* <img className="mx-auto  md:hidden block " src={MobileHeroBall} alt="hero-image" /> */}

        {/* <div className="px-20 transform w-full left-1/2 -translate-x-1/2 py-[26px]  md:py-[35px] absolute bottom-0 bg-[#FFFFFFB2] border-[#FFFFFF] backdrop-blur-sm">
        <ul className="flex justify-between items-center">
          {expertise.map((item, i) => (
            <li key={i} className=" flex items-center">
              <p className="text-[21px] md:text-[18px] xl:text-[28px] whitespace-nowrap font-medium leading-[26px] md:leading-[35px]">{item}</p>
              <div>
                {" "}
                {i + 1 < expertise.length && (
                  <div className="px-[43px]">
                    <GrayDot />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div> */}
        <div className="overflow-hidden absolute bottom-0 w-full py-[26px] md:py-[35px] bg-[#FFFFFFB2] backdrop-blur-sm border-[#FFFFFF]">
          <motion.div
            className="flex space-x-10 w-[200%]" // Make the container double the width to accommodate duplication
            animate={{ x: ["0%", "-100%"] }} // Animate from 0% to -100% to scroll from right to left
            transition={{
              repeat: Infinity, // Repeat the animation infinitely
              ease: "linear", // Keep the speed consistent
              duration: 50, // Adjust this number for speed
            }}
          >
            {expertiseList.map((item, i) => (
              <div key={i} className="flex items-center whitespace-nowrap">
                <p className="text-[21px] md:text-[18px] xl:text-[28px] font-medium leading-[26px] md:leading-[35px]">
                  {item}
                </p>
                {i + 1 < expertiseList.length && (
                  <div className="px-[43px]">
                    <GrayDot /> {/* Adjust the spacing and dot accordingly */}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
