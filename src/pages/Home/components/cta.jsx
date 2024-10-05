/* eslint-disable react/no-unescaped-entities */
import team from '../../../assets/images/team.webp'
import LB from '../../../components/ui/lineBreak'
const CTA = () => {
  return (
    <div className='pt-[65px]'>


        <h2 className='text-[#282828] text-center text-[36px] font-bold'>
        Ready to Elevate Your Event?
        </h2>
        <p className='text-[24px] pt-[21px] pb-[39px] text-center'>
        Join the revolution in beverage experiences with Ball-O-Shot! Whether you're hosting  a <LB/> music festival, a sports event, or a private party.
        </p>
        <button className="bg-[#303030] text-center mx-auto button-inner-shadow h-[78px] items-center rounded-full px-[69px] py-5 text-[#FFFFFF] text-[24px] font-semibold flex gap-2.5">
        Call Us Now
        </button>

        <img src={team} className='mx-auto' alt='team'></img>
    </div>
  )
}

export default CTA