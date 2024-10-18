import { useInView } from "react-intersection-observer";
import LB from "../../../components/ui/lineBreak"
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { slideAnimation } from "../../../lib/motion";
const Missions = () => {
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
    <div id='mission' ref={sectionRef} className="pt-10 pb-[82px] md:px-20 px-2.5"> 
       <motion.div 
       
       initial="initial"
       animate={animate ? "animate" : "initial"}
       exit="exit"
       variants={slideAnimation("down")}
       className="text-center max-w-[1263px] mx-auto bg-[#4F4F4F] rounded-[20px] py-[46px] md:py-[61px] px-[22px] md:px-[53px]">
       <h2 className=" text-[24px] md:text-[40px] font-bold text-[#FFFFFF] pb-4">
        Our Mission
        </h2>
        <p className="text-[16px] md:text-[30px] text-center  md:tracking-[3%] leading-[21px] md:leading-[37px] text-white">  
        Our goal is to lead the beverage industry with Ball-O-Shot as a staple at events worldwide. Through innovation and constant refinement, we aim to deliver a premium product that meets the highest standards of quality and <LB/> sustainability.
        </p>
       </motion.div>
    </div>
  )
}

export default Missions