import { AboutExpertise } from "../../../constants";

const Expertise = () => {
  return (
    <div className="pt-[89px] flex justify-center md:flex-row flex-col gap-x-[31px]">
      {AboutExpertise.map((item, i) => (
        <div
          className="bg-[#F8F8F8] md:size-[400px] rounded-[33px]  flex flex-col justify-center items-center pt-[72px] pb-[34px] px-5"
          key={i}
        >
          <div className="md:block hidden">{item.icon}</div>
          <div className="md:hidden block">{item.smicon}</div>
          <div>
            <h2 className="text-[#3F3F3F] text-center pt-[46px] text-[20px] md:text-[28px] leading-[35px] font-bold">
              {item.title}
            </h2>
            <p className="text-[16px] md:px-0 px-6 md:text-[20px] text-[#363636] pt-[12px] leading-[20px] md:leading-[25px] text-center">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
