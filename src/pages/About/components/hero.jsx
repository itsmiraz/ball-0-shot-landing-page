/* eslint-disable react/no-unescaped-entities */
import LB from "../../../components/ui/lineBreak";
import splashImage from "../../../assets/images/splash-exploded.webp";
const Hero = () => {
  return (
    <div className="relative pl-10 bg-gradient-to-t from-[#F4F4F4] to-[#FFFFFF] pb-[66px] py-[120px]">
      <h1 className="text-[#282828]  relative z-20 leading-[60px] text-[48px] font-bold">
        Own the Experience with Ball-O-Shot
      </h1>
      <p className="text-[24px] leading-[30px] relative z-20  text-[#5D5D5D]  pt-[16px] pb-[41px]">
        Let's craft the perfect order, customized for your venue or event type.{" "}
        <LB /> Book a call with our team today to get started on a seamless
        experience.
      </p>
      <button className="bg-[#303030]  button-inner-shadow h-[58px] md:h-[75px] items-center rounded-[10px] px-[69px] py-5 text-[#FFFFFF] text-18px md:text-[24px] font-semibold flex gap-2.5">
        Book A Call To Order
      </button>

      <img
        className="md:absolute z-10 right-0 bottom-0"
        src={splashImage}
        alt=""
      />
    </div>
  );
};

export default Hero;
