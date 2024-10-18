import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeftArrow from "../../../assets/icons/LeftArrowPlain.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
import { TestimonialsData } from "../../../constants";
import PropTypes from "prop-types";
import Star from "../../../assets/icons/star.svg";
import SmStar from "../../../assets/icons/SmStart.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
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
  return (
    <div ref={sectionRef} id="testimonials" className="py-[40px] md:py-[93px]">
      {" "}
      <div className="flex md:flex-row flex-col md:mb-[57px]  justify-center gap-[34px] md:justify-between md:px-20 items-center">
        <h2 className="text-[24px] md:text-[36px] font-bold text-[#323232s]">
          Testimonial
        </h2>
        <div className="gap-x-[21px] md:flex hidden items-center">
          <button className="md:w-[80px] w-[32px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button className="md:w-[80px] w-[32px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="pl-4  pt-[29px] md:pt-0 md:pl-20">
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
          modules={[Pagination, Navigation]}
          loop={true}
          breakpoints={{
            200: {
              slidesPerView:0.7,
              spaceBetween: 20,
            },
            300: {
              slidesPerView:0.9,
              spaceBetween: 20,
            },
            400: {
              slidesPerView:1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.9,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1500: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 2.8,
              spaceBetween: 20,
            },
          
          }}
          className="mySwiper "
        >
          {TestimonialsData.map((item, key) => (
            <SwiperSlide key={key}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -100 }}
                transition={{ duration: 0.3, delay: 0.3 * key }}
              >
                <TestimonialCard data={item} key={key} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gap-x-[21px]  justify-center pt-4 flex  md:hidden items-center">
          <button className="md:w-[80px] w-[32px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button className="md:w-[80px] w-[32px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[#FAFAFA] md:h-[345px] w-[350px] md:w-[611px]  py-[32px] px-[24px] rounded-[12px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[21px] md:text-[36px] font-bold text-[#44380F]">
          {data.name}
        </h2>
        <p className="bg-[#EBEBEB] text-[11px] md:text-[20px] text-[#44380F] rounded-[8px] p-[10px]">
          {data.badge}
        </p>
      </div>
      <div className="flex py-[15px]  gap-x-[9px]">
        {Array.from({ length: data.rating }, (value, index) => (
          <div className="" key={index}>
            <div className="md:block hidden">
              <Star />
            </div>
            <div className="block md:hidden">
              <SmStar />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[14px] md:text-[24px] text-[#44380F] leading-[17px] md:leading-[30px]">
        {data.review}
      </p>
    </div>
  );
};

TestimonialCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};
