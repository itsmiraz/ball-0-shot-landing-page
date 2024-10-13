import { Outlet } from "react-router-dom";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

/* eslint-disable react/prop-types */
const Root = () => {
  return (
    <div className="max-w-[2000px] md:pt-[67px]  relative overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
