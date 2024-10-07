import LB from "../../../components/ui/lineBreak"

const Missions = () => {
  return (
    <div className="pt-10 pb-[82px] px-[10px]"> 
       <div className="text-center max-w-[1263px] mx-auto bg-[#4F4F4F] rounded-[20px] py-[46px] md:py-[61px] px-[22px] md:px-[53px]">
       <h2 className=" text-[24px] md:text-[40px] font-bold text-[#FFFFFF] pb-4">
        Our Mission
        </h2>
        <p className="text-[16px] md:text-[30px] md:text-center text-start md:tracking-[3%] leading-[21px] md:leading-[37px] text-white">  
        Our goal is to lead the beverage industry with Ball-O-Shot as a staple at events worldwide. Through innovation and constant refinement, we aim to deliver a premium product that meets the highest standards of quality and <LB/> sustainability.
        </p>
       </div>
    </div>
  )
}

export default Missions