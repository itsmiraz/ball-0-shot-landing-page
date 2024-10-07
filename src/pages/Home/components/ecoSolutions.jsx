/* eslint-disable react/no-unescaped-entities */

import explodedImage from "../../../assets/images/EXPLODED.webp";

const EcoSolutions = () => {
  return (
    <div className="px-5 md:px-20 pt-[109px] justify-between flex md:flex-row flex-col-reverse gap-[23px] md:gap-20 items-center">
      <div className="w-[95%] md:w-[50%]">
        <p className="text-[18px] leading-[20px] md:text-start text-center md:text-[24px] text-[#5D5D5D] font-medium md:leading-[30.24px]">
          Eco Friendly Water Tap
        </p>
        <h2 className="text-[28px] md:text-start text-center  md:text-[40px] pt-[13px] md:pt-6 font-bold text-[#282828] leading-[50px]">
          What is Ball-O-Shot
        </h2>
        <p className="text-[16px] md:leading-normal leading-[20px] md:text-[24px] py-[13px] md:py-8 text-[#5D5D5D]">
          Ball-O-Shot® revolutionizes how you enjoy beverages with its
          eco-friendly algae-based sphere. Each Ball-O-Shot is biodegradable,
          vegan, gluten-free, and non-GMO, making it suitable for a wide range
          of dietary preferences and lifestyles. It's a product designed with
          sustainability and health in mind, offering a responsible alternative.
        </p>
        <button className="bg-[#303030]  button-inner-shadow items-center rounded-[9px]  py-[14px] md:py-5 text-[#FFFFFF] text-[15px] md:text-[20px] font-semibold w-[343px] leading-[25px] text-center">Learn More</button>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <img className="w-full" src={explodedImage} alt="" />
      </div>
    </div>
  );
};

export default EcoSolutions;
