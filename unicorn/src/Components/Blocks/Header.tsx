// 

import logo from "../../assets/images/IMG-20231011-WA0007-1.jpg"
import {Link} from "react-router-dom"
// import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  return (
    <div className="bg-[white] p-10 h-[50px] w-[100%] flex justify-between items-center md:p-2 sm:justify-between sm:p-2">
      <div className="h-[30px] w-[100px] sm:h-[30px]w-[100px]">
        <img className="h-[30px] w-[100px] object-cover" src={logo} />
      </div>
      <nav className="text-[#1239AC] flex justify-between text-center p-[12px] gap-[30px] sm:hidden md:hidden cursor-pointer">
        <Link to={"/"} className=" text-[16px]">
          {" "}
          Home
        </Link>
        <Link to={"/About"} className=" text-[16px]">
          {" "}
          About
        </Link>
        <Link to={"/Services"} className=" text-[16px]">
          {" "}
          Service
        </Link>
        <Link to={"Blog"} className=" text-[16px]">
          {" "}
          Blog
        </Link>
        <nav className=" text-[16px]"> Service</nav>
      </nav>

      <div className="h-[30px] w-[30px] md:text-[#1239AC] md:h-[30px] md:m-5 md:text-[28px] xl:hidden lg:hidden sm:h-[30px] sm:[30px] sm:text-[28px] sm:text-[#1239AC]">
        {/* <GiHamburgerMenu /> */}
      </div>

      <Link to={"/Signup"}>
        {" "}
        <button className="text-[white] p-[5px] flex flex-col items-center text-center rounded-[7px] h-[30px] w-[100px] bg-[#FFB400] md:hidden sm:hidden">
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Header
