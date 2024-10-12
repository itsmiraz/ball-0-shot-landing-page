import logo from "@/assets/logo/logo.png";
import Menu from "../../../assets/icons/menu.svg";
import Close from "../../../assets/icons/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const AboutHeader = () => {
  const [Show, setShow] = useState(false);

  return (
    <div className="flex md:flex-row flex-col justify-center items-center">
      <ul className=" hidden md:flex items-center justify-center gap-x-10 ">
        <li>
          <Link to={"/"}>
            <p className="text-[20px] leading-[25px]">Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/#about"}>
            <p className="text-[20px] leading-[25px]">About</p>
          </Link>
        </li>
        <li>
          <Link to={"#cta"}>
            <p className="text-[20px] leading-[25px]">Contact</p>
          </Link>
        </li>
        <li>
       <Link to={"/"}>
       <img className="max-w-[130px]" src={logo} alt="ball-0-shot-logo" /></Link>
        </li>
        <li>
          <Link to={"#service"}>
            <p className="text-[20px] leading-[25px]">Service</p>
          </Link>
        </li>
        <li>
          <Link to={"#testimonials"}>
            <p className="text-[20px] leading-[25px]">Client</p>
          </Link>
        </li>
        <li>
          <Link to={"/#awards"} className="z-40 relative">
            <p className="text-[20px]  leading-[25px]">Award</p>
          </Link>
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
              <Link to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Service</p>
            </li>
            <li>
              <p>Client</p>
            </li>
            <li>
              <p>Award</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
