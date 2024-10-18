import PropTypes from "prop-types";
import LeftArrow from "../../../assets/icons/LeftArrowPlain.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
import { GalleryContent } from "../../../constants";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
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

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);
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
  return (
    <div ref={sectionRef} className="pt-[135px] pb-[40px] md:pb-[96px] ">
      <div className="flex md:mb-[57px] md:flex-row gap-[22px] flex-col justify-center md:justify-between md:px-20 items-center">
        <h2 className="text-[24px] md:text-[40px] font-bold text-[#323232s]">
          Gallery
        </h2>
        <div className="gap-x-[21px] hidden  md:flex items-center">
          <button className="md:w-[80px] w-[34px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button className="md:w-[80px] w-[34px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="pl-[22px] md:pl-[95px] pt-10">
        <Swiper
          ref={swiperRef}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          loop={true}
          navigation={{
            nextEl: ".right-arrow",
            prevEl: ".left-arrow",
          }}
          modules={[Pagination, Navigation]}
          //   loop={true}
          centeredSlides={isCentered}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2.9,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {GalleryContent.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -100 }}
                transition={{ duration: 0.3, delay: 0.3 * i }}
              >
                <GalleryCard data={item} key={i} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gap-x-[21px] flex justify-center pt-5   md:hidden items-center">
          <button className="md:w-[80px] w-[34px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button className="md:w-[80px] w-[34px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
    </div>
  );
};

export default Gallery;

const GalleryCard = ({ data }) => {
  return (
    <div className="w-[340px] md:w-[508px]">
      <div className="md:h-[293px] h-[184px] rounded-[12px] overflow-hidden flex justify-center items-center">
        <img
          src={data.image}
          className="w-full h-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="pt-[22px] md:pt-[36px]">
        <h2 className="text-[#323232] text-[20px] md:text-[32px] leading-[40px] font-bold">
          {data.title}
        </h2>
        <p className="text-[#323232] text-[17px] md:text-[28px]">{data.date}</p>
      </div>
    </div>
  );
};
// PropTypes definition for GalleryCard
GalleryCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
