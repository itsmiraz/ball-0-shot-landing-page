import PropTypes from "prop-types";
import LeftArrow from "../../../assets/icons/LeftArrowPlain.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
import { GalleryContent } from "../../../constants";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  return (
    <div className="pt-[135px] pb-[96px] ">
      <div className="flex justify-between px-20 items-center">
        <h2 className="text-[40px] font-bold text-[#323232s]">Gallery</h2>
        <div className="gap-x-[21px] flex items-center">
          <button onClick={handleLeftClick}>
            <LeftArrow />
          </button>

          <button onClick={handleRightClick}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="pl-4 md:pl-20 pt-10">
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {GalleryContent.map((item, i) => (
            <SwiperSlide key={i}>
              <GalleryCard data={item} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;

const GalleryCard = ({ data }) => {
  return (
    <div className="w-[508px]">
      <div>
        <img src={data.image} className="w-full md:h-[293px]" alt="" />
      </div>
      <div className="pt-[36px]">
        <h2 className="text-[#323232] text-[32px] leading-[40px] font-bold">
          {data.title}
        </h2>
        <p className="text-[#323232] text-[28px]">{data.date}</p>
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
