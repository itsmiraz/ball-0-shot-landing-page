import LeftArrow from "../../../assets/icons/LeftArrowPlain.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
const Gallery = () => {
  return (
    <div className="pt-[135px] pb-[96px] ">
      <div className="flex justify-between px-20 items-center">
        <h2 className="text-[40px] font-bold text-[#323232s]">Gallery</h2>
        <div className="gap-x-[21px] flex items-center">
          <button>
            <LeftArrow />
          </button>

          <button>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
