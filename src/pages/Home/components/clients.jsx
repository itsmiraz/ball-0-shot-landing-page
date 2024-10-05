
import image1 from "../../../assets/images/trusted/image-1.webp";
import image2 from "../../../assets/images/trusted/image-2.webp";
import image3 from "../../../assets/images/trusted/image-3.webp";
import image4 from "../../../assets/images/trusted/image-4.webp";
import image5 from "../../../assets/images/trusted/image-5.webp";
import image6 from "../../../assets/images/trusted/image-6.webp";
import image7 from "../../../assets/images/trusted/image-7.webp";
import image8 from "../../../assets/images/trusted/image-9.webp";
import image9 from "../../../assets/images/trusted/image-10.webp";

const Clients = () => {
  const clientsRow1 = [image1, image2, image3, image4, image5];

  const clientsRow2 = [image6, image7, image8, image9];

  return (
    <div className="py-[58px]">
      <h2 className="text-[36px] font-bold text-[#282828] text-center leading-[45px]">Our Best Client</h2>
      <p className="text-[24px] text-center">We Work With Many Instituotion And Coorporate</p>
      <div className="space-y-[65px] pt-[59px]">
        <div className="flex justify-center items-center gap-x-[37px]">
        {clientsRow1.map((item, i) => (
          <img src={item} key={i} />
        ))}
        </div>
       <div className="flex justify-center items-center gap-x-[93px]">
       {clientsRow2.map((item, i) => (
          <img src={item} key={i} />
        ))}
       </div>
      </div>
    </div>
  );
};

export default Clients;
