import logo from "../../assets/logo/logo.png";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const Footer = () => {
  // const navLinks = [
  //   { link: "/", label: "Home" },
  //   { link: "/", label: "About us" },
  //   { link: "/", label: "Service" },
  //   {
  //     link: "/",
  //     label: "Project",
  //   },
  // ];

  const Details = [
    {
      icon: <MailIcon/>,
      title: "+1 (819) 230-1834",
    },
    {
      icon: <LocationIcon/>,
      title: "Canada, QC",
    },
    {
      icon: <MailIcon/>,
      title: "info@balloshot.com",
    },
  ];
  return (
    <div className="pt-[48px] pb-[34px]">
      <img src={logo} className="max-w-[130px] mx-auto" alt="" />

      <div className="flex gap-x-[20px] text-2xl text-gray-700 md:gap-x-[10px] justify-center items-center pt-[33px] pb-[37px]">
        {/* {navLinks.map((item, i) => ( */}
          <Link to={"/"} >
            {" "}
            <FaTiktok />
          </Link>
          <Link to={"/"} >
            {" "}
            <FaInstagram />
          </Link>
          <Link to={"/"} >
            {" "}
            <FaFacebook />
          </Link>
        {/* ))} */}
      </div>

      <div className="flex flex-wrap pb-[39px] gap-y-[20px] gap-x-[27px] justify-center items-center">
        {Details.map((item, i) => (
          <div key={i} className="flex gap-x-[13px]">
            {" "}
            <div>{item.icon}</div>
            <p className="text-[14px] text-[#2B2B2B]">{item.title}</p>
          </div>
        ))}
      </div>
      <p className="text-[#2B2B2B] text-center text-[14px] ">Ball-O-Shot Copyright 2024 ©</p>
    </div>
  );
};

export default Footer;
