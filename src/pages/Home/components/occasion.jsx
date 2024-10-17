import LB from "../../../components/ui/lineBreak";
import { OccasionContent } from "../../../constants";
import LeftArrowFil from "../../../assets/icons/leftArrowFill.svg";
import RightArrowFil from "../../../assets/icons/rightArrowFill.svg";
import PropTypes from "prop-types";

import BackgroundImage from "../../../assets/images/project-occassion-bg.webp";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "../../../lib/motion";
const Occasion = () => {
  const swiperRef = useRef(null);

  const handleLeftClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleRightClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const [sectionRef, inView] = useInView({
    triggerOnce: true, // Trigger animation once when it enters the viewport
    threshold: 0.2, // Adjust this threshold as needed
  });

  // State to control whether animations should play
  const [animate, setAnimate] = useState(false);
  const [isCentered, setIsCentered] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsCentered(false); // Disable centeredSlides on large devices
      } else {
        setIsCentered(true); // Enable centeredSlides on mobile
      }
    };

    // Call the function on component mount and on window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the state on component mount

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
  }, []);
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div
      id="events"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover", // Makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating the background image
      }}
      className="pt-[95px] pb-[35px]"
    >
      <h2 className="text-[28px] text-white  md:text-[36px] font-bold text-center">
        Perfect Occasion
      </h2>
      <p className="text-[16px]  text-white md:text-[24px] pt-[20px] pb-[34px] text-center">
        Delivering Sustainable, On-the-Go Refreshment for Any Occasion — Perfect
        for Festivals <LB /> , Sports, and Events Worldwide
      </p>
      <button className="bg-[#303030] hover:bg-[#303030]/90 duration-200 ease-in-out transition-all  text-center mx-auto  button-inner-shadow h-[60px] md:h-[78px] items-center rounded-full px-[69px] py-5 text-[#FFFFFF] text-[16px] md:text-[24px] font-semibold flex gap-2.5">
        Book A Call To Order
      </button>

      <motion.div
        initial="initial"
        animate={animate ? "animate" : "initial"}
        exit="exit"
        variants={slideAnimation("up")}
        className="pl-4 md:pl-10 md:pr-5 pt-[33px] pb-[49px]"
      >
        <Swiper
          ref={swiperRef}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          centeredSlides={isCentered}
          modules={[Pagination, Navigation]}
          loop={true}
          breakpoints={{
            250: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.7,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper "
        >
          {OccasionContent.map((item, i) => (
            <SwiperSlide key={i}>
              <OccasionCard data={item} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="flex justify-center items-center gap-x-6">
        <button aria-label="Scroll left" onClick={handleLeftClick}>
          <LeftArrowFil />
        </button>
        <button aria-label="Scroll Right" onClick={handleRightClick}>
          <RightArrowFil />
        </button>
      </div>
    </div>
  );
};

export default Occasion;

const OccasionCard = ({ data }) => {
  return (
    <div className="p-[6px] md:p-3 cursor-pointer rounded-[16px] h-[257px] md:h-[477px] bg-[#FFFFFF] w-[225px] md:w-[430px]">
      <div>
        <img className="w-full" src={data.img} alt="image" />
      </div>
      <div className="pt-[12px] md:pt-[23px]">
        <h2 className="text-[#282828] text-[15px] md:text-[28px] font-semibold">
          {data.title}
        </h2>
        <p className="text-[11px] md:text-[19px] text-[#282828] pt-[6px] md:pt-3">
          {data.description}
        </p>
      </div>
    </div>
  );
};
OccasionCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired, // `img` should be a string (the image URL)
    title: PropTypes.string.isRequired, // `title` should be a string
    description: PropTypes.string.isRequired, // `description` should be a string
  }).isRequired,
};
