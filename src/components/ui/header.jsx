import logo from "@/assets/logo/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex items-center justify-center gap-x-10 ">
        <li>
          <p className="text-[20px] leading-[25px]">About</p>
        </li>
        <li>
          <p className="text-[20px] leading-[25px]">Specs</p>
        </li>
        <li>
          <p className="text-[20px] leading-[25px]">Mission</p>
        </li>
        <li>
          <img className="max-w-[130px]" src={logo} alt="ball-0-shot-logo" />
        </li>
        <li>
          <p className="text-[20px] leading-[25px]">History</p>
        </li>
        <li>
          <p className="text-[20px] leading-[25px]">Events</p>
        </li>
        <li>
          <p className="text-[20px] leading-[25px]">Certificate</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
