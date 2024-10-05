/* eslint-disable react/no-unescaped-entities */

import explodedImage from "../../../assets/images/EXPLODED.webp";

const EcoSolutions = () => {
  return (
    <div className="px-20 pt-[109px] justify-between flex gap-20 items-center">
      <div className="w-[50%]">
        <p className="text-[24px] text-[#5D5D5D] font-medium leading-[30.24px]">
          Eco Friendly Water Tap
        </p>
        <h2 className="text-[40px] pt-6 font-bold text-[#282828] leading-[50px]">
          What is Ball-O-Shot
        </h2>
        <p className="text-[24px] py-8 text-[#5D5D5D]">
          Ball-O-Shot® revolutionizes how you enjoy beverages with its
          eco-friendly algae-based sphere. Each Ball-O-Shot is biodegradable,
          vegan, gluten-free, and non-GMO, making it suitable for a wide range
          of dietary preferences and lifestyles. It's a product designed with
          sustainability and health in mind, offering a responsible alternative.
        </p>
        <button className="bg-[#303030]  button-inner-shadow items-center rounded-[9px]  py-5 text-[#FFFFFF] text-[20px] font-semibold w-[343px] leading-[25px] text-center">Learn More</button>
      </div>
      <div className="w-[50%]">
        <img className="w-full" src={explodedImage} alt="" />
      </div>
    </div>
  );
};

export default EcoSolutions;
