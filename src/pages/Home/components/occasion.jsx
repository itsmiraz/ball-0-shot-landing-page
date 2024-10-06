import LB from "../../../components/ui/lineBreak";
import { OccasionContent } from "../../../constants";
import LeftArrowFil from "../../../assets/icons/leftArrowFill.svg";
import RightArrowFil from "../../../assets/icons/rightArrowFill.svg";
import PropTypes from "prop-types";

import BackgroundImage from "../../../assets/images/project-occassion-bg.webp";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover", // Makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents repeating the background image
      }}
      className="pt-[95px] pb-[35px]"
    >
      <h2 className="text-[36px] font-bold text-center">Perfect Occasion</h2>
      <p className="text-[24px] pt-[20px] pb-[34px] text-center">
        Delivering Sustainable, On-the-Go Refreshment for Any Occasion — Perfect
        for Festivals <LB /> , Sports, and Events Worldwide
      </p>
      <button className="bg-[#303030] text-center mx-auto  button-inner-shadow h-[78px] items-center rounded-full px-[69px] py-5 text-[#FFFFFF] text-[24px] font-semibold flex gap-2.5">
        Book A Call To Order
      </button>

      <div className="pl-10 pr-5 pt-[33px] pb-[49px]">
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
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
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
      </div>
      <div className="flex justify-center items-center gap-x-6">
        <button onClick={handleLeftClick}>
          <LeftArrowFil />
        </button>
        <button onClick={handleRightClick}>
          <RightArrowFil />
        </button>
      </div>
    </div>
  );
};

export default Occasion;

const OccasionCard = ({ data }) => {
  return (
    <div className="p-3 rounded-[16px] h-[457px] bg-[#FFFFFF] w-[400px]">
      <div>
        <img src={data.img} alt="image" />
      </div>
      <div className="pt-[23px]">
        <h2 className="text-[#282828] text-[28px] font-semibold">
          {data.title}
        </h2>
        <p className="text-[19px] text-[#282828] pt-3">{data.description}</p>
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
