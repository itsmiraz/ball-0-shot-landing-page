import Footer from "../components/ui/footer";
import Header from "../components/ui/header";

/* eslint-disable react/prop-types */
const Root = ({ children }) => {
  return (
    <div className="max-w-[1520px] pt-[67px]  relative overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Root;
