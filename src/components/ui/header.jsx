import logo from "@/assets/logo/logo.png";
import Menu from "../../assets/icons/menu.svg";
import Close from "../../assets/icons/close.svg";
import { useState } from "react";
const Header = () => {
  const [Show, setShow] = useState(false);

  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
      <ul className=" hidden md:flex items-center justify-center gap-x-10 ">
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
      <div className="md:hidden  block sticky top-0 w-full">
        <div className="relative flex border-b border-[#F2F4F7] py-[17px] px-[20px] w-full justify-between">
          <div>
            <img className="max-w-[89px]" src={logo} alt="" />
          </div>
          {/* menu */}

          <div>
            <button onClick={() => setShow(!Show)}>
              {Show ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {/* links */}
        <div
          className={`${
            Show ? "max-h-[150px]" : "max-h-[0px] "
          }  overflow-auto  transform transition-all ease-in-out duration-300  bg-white w-full`}
        >
          <ul className="grid gap-[18px] w-full  pl-5 py-6 grid-cols-2 text-[14px] text-[#101828]">
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Mission</p>
            </li>
            <li>
              <p>Specs</p>
            </li>
            <li>
              <p>History</p>
            </li>
            <li>
              <p>Events</p>
            </li>
            <li>
              <p>Certificate</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
