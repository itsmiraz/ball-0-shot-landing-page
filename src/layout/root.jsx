import Footer from "../components/ui/footer";

/* eslint-disable react/prop-types */
const Root = ({ children }) => {
  return (
    <div className="max-w-[2000px] md:pt-[67px]  relative overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      {children}
      <Footer/>
    </div>
  );
};

export default Root;
