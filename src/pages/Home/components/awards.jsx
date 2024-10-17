import LB from "../../../components/ui/lineBreak";
import LeftArrow from "../../../assets/icons/leftArrowDarkFill.svg";
import RightArrow from "../../../assets/icons/rightArrowDarkFill.svg";
import { AwardContent } from "../../../constants";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PropTypes from "prop-types";

const Awards = () => {
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
    <div id="awards" className="py-[72px]">
      <div className="flex md:flex-row flex-col justify-between px-[22px] md:px-10">
        <div>
          <h2 className="text-[#493D14] text-[24px] md:text-[36px] font-bold">
            Certificate Earned
          </h2>
          <p className="text-[16px] md:pt-0 pt-[21px] md:text-[24px] ">
            {" "}
            We have proudly participated in multiple entrepreneurship contests{" "}
            <LB /> and won numerous awards, showcasing the innovation behind
            Ball-O-Shot.
          </p>
        </div>
        <div className="hidden md:flex    md:pt-0 pt-[32px] gap-x-6 items-center">
          <button className="md:w-[57px] w-[40px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>
          <button className="md:w-[57px] w-[40px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>

      <div className="pl-[22px] md:pl-10 pt-[55px] ">
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
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          
            1600: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {AwardContent.map((item, i) => (
            <SwiperSlide key={i}>
              <AwardCard data={item} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden flex  px-[22px] md:pt-0 pt-[32px] gap-x-6 items-center">
          <button className="md:w-[57px] w-[40px]" onClick={handleLeftClick}>
            <LeftArrow />
          </button>
          <button className="md:w-[57px] w-[40px]" onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
    </div>
  );
};

export default Awards;
const AwardCard = ({ data }) => {
  return (
    <div className="bg-[#F8F8F8] cursor-pointer rounded-[20px] pt-[26px] md:pt-[53px] pb-[20px] md:pb-[40px] px-[15px] md:px-[30px] w-[308px] h-[258px] md:h-[480px] md:w-[700px]">
      <div>
        <img
          className="md:max-w-fit md:max-h-[133px] max-h-[83px] max-w-[133px] md:w-[223px]"
          src={data.img}
          alt=""
        />
      </div>
      <div className="w-full mt-5">
        <h2 className="text-[#282828] text-[18px] md:text-[36px] font-bold">
          {data.title}
        </h2>
        <p className="text-[12px] md:text-[24px]">{data.desc}</p>
        <p className="pt-[19px] md:pt-[39px] text-[12px] md:text-[24px]">
          {data.code}
        </p>
      </div>
    </div>
  );
};

// Define PropTypes for AwardCard
AwardCard.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired, // Image URL
    title: PropTypes.string.isRequired, // Title of the award
    desc: PropTypes.string.isRequired, // Description of the award
    code: PropTypes.string.isRequired, // Code or additional info
  }).isRequired,
};
