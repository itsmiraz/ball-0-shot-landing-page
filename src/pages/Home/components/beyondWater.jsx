import centerBubble from "../../../assets/images/center-bubbles.webp";
import antiLacing from "../../../assets/images/anti-lacing.webp";
import convienence from "../../../assets/images/convienence.webp";
import ecoFriendly from "../../../assets/images/eco-friendly.webp";
import vegan from "../../../assets/images/vegan.webp";
import LB from "../../../components/ui/lineBreak";

const BeyondWater = () => {
  return (
    <div className="pb-[100px] pt-10">
      <div className="pt-[188px] relative">
        
        
        {/* anti-lacing */}
        
        <img src={antiLacing} className="absolute top-10 left-1/4 max-w-[225px]" alt="" />
        
        
        <img src={convienence} className="absolute  bottom-0 left-0 max-w-[334px]" alt="" />
      
      
        <img src={ecoFriendly} className="absolute  top-20 right-0 max-w-[334px]" alt="" />
        <img src={vegan} className="absolute  -bottom-20 -right-0 max-w-[167px]" alt="" />
        
        
        
        
        
        <img className="mx-auto max-w-[635px]" src={centerBubble} alt="" />
      </div>

      <div>
        <h2 className="text-[#323232] pt-10 font-bold text-[40px] text-center pb-[13px]">
          Not just water
        </h2>
        <p className="text-[24px] text-[#5D5D5D] text-center">
          Ball-O-Shot® offers more than just water. This innovative product can
          encapsulate a <LB /> variety of beverages, including water, juice,
          energy drinks, and even alcohol, all within <LB /> an eco-friendly,
          sustainable solution. It’s a versatile option designed to meet
          different needs <LB /> while prioritizing environmental
          responsibility.
        </p>
      </div>
    </div>
  );
};

export default BeyondWater;
