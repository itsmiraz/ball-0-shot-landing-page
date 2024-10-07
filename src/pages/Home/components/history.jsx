import step1 from "../../../assets/images/steps/1.png";
import step2 from "../../../assets/images/steps/2.png";
import step3 from "../../../assets/images/steps/3.png";

import inceptionImage from "../../../assets/images/Inception.webp";
import researchImage from "../../../assets/images/Research.webp";
import refineMent from "../../../assets/images/Refinement.webp";

import LB from "../../../components/ui/lineBreak";

const History = () => {
  const sections = [
    {
      title: "Inception (Summer 2022)",
      description:
        "The concept of Ball-O-Shot was born in the summer of 2022, marking the beginning of an exciting journey.",
      image: inceptionImage,
      alt: "inception-image",
    },
    {
      title: "Research and Development",
      description:
        "Extensive research and testing were carried out to bring the idea to life and ensure it met the highest standards.",
      image: researchImage,
      alt: "research-image",
    },
    {
      title: "Refinement and Perfection",
      description:
        "After months of research and development, we achieved a prototype solid enough for commercial use, paving the way for Ball-O-Shot’s successful market introduction.",
      image: refineMent,
      alt: "refinement-image",
    },
  ];
  return (
    <div className="pt-[65px] pb-[126px]">
      <h2 className="text-[28px] md:text-[40px] font-bold text-[#323232] text-center">
        Our Ball-O-Shot History
      </h2>
      <p className="text-[18px] md:text-[24px] font-medium text-center text-[#8B8B8B]">
        Our Commitment To Ensure <br className="md:hidden block" /> Enviromental
        Green Safe
      </p>

      <div className="pt-[88px]  hidden max-w-[1265px] mx-auto md:flex justify-center gap-x-[74px]">
        {/* left section */}
        <div className="w-fit">
          {/* inception Image */}
          <div>
            <img
              className="max-w-[415px]"
              src={inceptionImage}
              alt="inception-image"
            />
          </div>

          {/* Research Text */}
          <div className="pt-[89px] pb-[108px]">
            <h2 className="text-[#131313] leading-[35px] font-bold text-[28px]">
              Research and Development
            </h2>
            <p className="text-[24px] pt-[17px]">
              Extensive research and testing were <LB /> carried out to bring
              the idea to life <LB /> and ensure it met the highest <LB />{" "}
              standards.
            </p>
          </div>
          {/* refinement image */}
          <div>
            <img
              className="max-w-[415px]"
              src={refineMent}
              alt="refinement-image"
            />
          </div>
        </div>
        {/* mid line */}
        <div className="h-[658px] relative w-[70px] flex justify-center items-center">
          <div className="w-[7px] bg-[#474747] h-full"></div>
          <img
            className="absolute min-w-[70px] top-0 transform -translate-x-1/2 left-1/2"
            src={step1}
            alt=""
          />
          <img
            className="absolute min-w-[70px] top-1/2 -translate-y-1/2 transform  -translate-x-1/2 left-1/2"
            src={step2}
            alt=""
          />
          <img
            className="absolute min-w-[70px] bottom-0 transform  -translate-x-1/2 left-1/2"
            src={step3}
            alt=""
          />
        </div>

        {/* left section */}
        <div className="w-fit">
          {/* Research Text */}
          <div className="">
            <h2 className="text-[#131313] leading-[35px] font-bold text-[28px]">
              Inception (Summer 2022)
            </h2>
            <p className="text-[24px] pt-[17px]">
              The concept of Ball-O-Shot was <LB /> born in the summer of 2022,
              marking <LB />
              the beginning of an exciting journey.
            </p>
          </div>
          {/* inception Image */}
          <div className="pt-[157px] pb-[70px]">
            <img
              className="max-w-[415px]"
              src={researchImage}
              alt="inception-image"
            />
          </div>

          {/* Refinement Text */}
          <div className="">
            <h2 className="text-[#131313] leading-[35px] font-bold text-[28px]">
              Refinement and Perfection
            </h2>
            <p className="text-[24px] pt-[17px]">
              After months of research <LB /> and development, we achieved a{" "}
              <LB /> prototype solid enough for <LB /> commercial use, paving
              the way <LB /> for Ball-O-Shot’s successful market <LB />{" "}
              introduction
            </p>
          </div>
        </div>
      </div>
      <div className="flex pt-[40px] px-[10px] gap-x-[14px] ">
        <div className="h-[740px] relative w-[47px] flex justify-center items-center">
          {/* step */}
          <div className="w-[4px] bg-[#474747] h-full"></div>
          <img
            className="absolute min-w-[47px] top-0 transform -translate-x-1/2 left-1/2"
            src={step1}
            alt=""
          />
          <img
            className="absolute min-w-[47px] top-1/2 -translate-y-1/2 transform  -translate-x-1/2 left-1/2"
            src={step2}
            alt=""
          />
          <img
            className="absolute min-w-[47px] bottom-0 transform  -translate-x-1/2 left-1/2"
            src={step3}
            alt=""
          />
        </div>
        <div className="space-y-[34px]">
          {sections.map((section, index) => (
            <div key={index}>
              <img
                className="max-w-[314px]"
                src={section.image}
                alt={section.alt}
              />
              <h2 className="text-[#131313] pt-[32px] leading-[26px] font-bold text-[20px]">
                {section.title}
              </h2>
              <p className="text-[17px] max-w-[306px] pt-[17px]">
                {section.description.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex}>
                    {word}
                    {wordIndex % 5 === 0 ? <LB /> : " "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
