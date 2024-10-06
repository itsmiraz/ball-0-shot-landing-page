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
    <div className="py-[72px]">
      <div className="flex justify-between px-10">
        <div>
          <h2 className="text-[#493D14] text-[36px] font-bold">
            Certificate Earned
          </h2>
          <p className="text-[24px] ">
            {" "}
            We have proudly participated in multiple entrepreneurship contests{" "}
            <LB /> and won numerous awards, showcasing the innovation behind
            Ball-O-Shot.
          </p>
        </div>
        <div className="flex gap-x-6 items-center">
          <button onClick={handleLeftClick}>
            <LeftArrow />
          </button>
          <button onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>

      <div className="pl-10 pt-[55px] ">
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
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.7,
              spaceBetween: 3,
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
    </div>
  );
};

export default Awards;
const AwardCard = ({ data }) => {
  return (
    <div className="bg-[#F8F8F8] cursor-pointer rounded-[20px] pt-[53px] pb-[40px] px-[30px] w-[616px]">
      <div>
        <img src={data.img} alt="" />
      </div>
      <div>
        <h2 className="text-[#282828] text-[36px] font-bold">{data.title}</h2>
        <p className="text-[24px]">{data.desc}</p>
        <p className="pt-[39px] text-[24px]">{data.code}</p>
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
