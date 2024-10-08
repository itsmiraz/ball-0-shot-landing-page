import { useRef } from "react";
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
  return (
    <div className="py-[93px]">
      {" "}
      <div className="flex justify-between px-20 items-center">
        <h2 className="text-[36px] font-bold text-[#323232s]">Testimonial</h2>
        <div className="gap-x-[21px] flex items-center">
          <button onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="pl-4 md:pl-20">
      
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
          //   loop={true}
          breakpoints={{
            400: {
              slidesPerView: 1.2,
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
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >

        {TestimonialsData.map((item, key) => (
          <SwiperSlide key={key}>
            <TestimonialCard data={item} key={key} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ data }) => {
  return (
    <div className="bg-[#FAFAFA] md:h-[265px] md:w-[611px]  py-[32px] px-[24px] rounded-[12px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[36px] font-bold text-[#44380F]">{data.name}</h2>
        <p className="bg-[#EBEBEB] text-[20px] text-[#44380F] rounded-[8px] p-[10px]">
          {data.badge}
        </p>
      </div>
      <div className="flex py-[15px]  gap-x-[9px]">
        {Array.from({ length: data.rating }, (value, index) => (
          <Star key={index} />
        ))}
      </div>
      <p className="text-[24px] text-[#44380F] leading-[30px]">{data.review}</p>
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
