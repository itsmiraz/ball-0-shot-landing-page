import heroBallImage from "../../../assets/images/hero-ball-image.webp";
import GrayDot from "../../../assets/icons/grayDot.svg";
import GofundMe from "../../../assets/icons/goFundme.svg";
import LB from "../../../components/ui/lineBreak";

const Hero = () => {
  const expertise = [
    "Vegan",
    "Eco-Friendly",
    "Anti-Lacing Technology",
    "Convenience",
    "Visibility",
  ];
  return (
    <div className="pt-[84px] relative">
      <h1 className="text-[#282828] text-[48px] text-center font-semibold leading-[60px]">
        Experience the Fun & Convenience <LB /> of Ball-O-Shot
      </h1>
      <div className="flex justify-center items-center  gap-x-[22px] pt-[38px] pb-[48px]">
        <button className="border border-[#303030] h-[78px] items-center rounded-full px-[42px] py-4 text-[#2F2F2F] text-[24px] font-semibold flex gap-2.5">
          <GofundMe /> Go Fund Me{" "}
        </button>
        <button className="bg-[#303030]  button-inner-shadow h-[78px] items-center rounded-full px-[69px] py-5 text-[#FFFFFF] text-[24px] font-semibold flex gap-2.5">
          Book A Call To Order
        </button>
      </div>

      <img className="mx-auto" src={heroBallImage} alt="hero-image" />

      <div className="px-20 py-[35px] absolute bottom-0 bg-[#FFFFFFB2] border-[#FFFFFF] backdrop-blur-sm">
        <ul className="flex justify-between items-center">
          {expertise.map((item, i) => (
            <li key={i} className=" flex items-center">
              <p className="text-[28px] font-medium leading-[35px]">{item}</p>
              <div>
                {" "}
                {i + 1 < expertise.length && (
                  <div className="px-[43px]">
                    <GrayDot />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
