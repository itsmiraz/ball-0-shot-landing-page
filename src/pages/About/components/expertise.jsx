import { useInView } from "react-intersection-observer";
import { AboutExpertise } from "../../../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Expertise = () => {
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
      id="service"
      className="pt-[89px] flex justify-center md:flex-row flex-col gap-x-[31px]"
    >
      {AboutExpertise.map((item, i) => (
        <motion.div
          initial={{ opacity: 0 , x:-100}}
          animate={{ opacity: animate ? 1 : 0 , x: animate?0:-100 }}
          transition={{ duration: 0.3, delay: 0.3 * i }}
          className="bg-[#F8F8F8] md:size-[400px] rounded-[33px]  flex flex-col justify-center items-center pt-[72px] pb-[34px] px-5"
          key={i}
        >
          <div className="md:block hidden">{item.icon}</div>
          <div className="md:hidden block">{item.smicon}</div>
          <div>
            <h2 className="text-[#3F3F3F] text-center pt-[46px] text-[20px] md:text-[28px] leading-[35px] font-bold">
              {item.title}
            </h2>
            <p className="text-[16px] md:px-0 px-6 md:text-[20px] text-[#363636] pt-[12px] leading-[20px] md:leading-[25px] text-center">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Expertise;
