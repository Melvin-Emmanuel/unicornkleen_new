import React from "react";

import pic from "../assets/hero pic.jpg" 
import pic1 from "../assets/house.png"

import pic2 from ".././assets/window.png"
import pic3 from ".././assets/office cleaner.png";
import pic4 from ".././assets/star.png";
import pic5 from ".././assets/smile.jpg";
import pic6 from ".././assets/afro-woman.avif";
import pic7 from ".././assets/cleaning-window.jpg";
import pic8 from ".././assets/operator-with-headphones.jpg";
import pic9 from ".././assets/mappp.png";
import Timer from "../Components/Blocks/Timer";
import Header from "../Components/Blocks/Header";
import Footer from "../Components/Blocks/Footer";

const Service: React.FC = () => {
  return (
    <>
      <Timer />
      <Header/>
      <div className="bg-white mt-[-70px] ">
        <div className=" flex bg-white w-screen h-screen mt-[70px] sm:w-screen sm:h-screen sm:flex-col sm:mt-[70px]">
          <div className="bg-[#1239ca] flex items-center justify-center w-[70%] h-[100%] sm:w-screen sm:h-80 ">
            <h2 className=" text-white  font-bold text-[40px]">Our Service</h2>
          </div>
          <div className="w-[30%] sm:w-screen sm:h-[300px]">
            <img className="w-[100%] h-[100%] object-cover" src={pic} />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center p-3">
            <h2 className="text-[30px] text-gray-700 ">Our Popular jobs</h2>
          </div>

          <div className="flex justify-center border-[1px] gap-5 h-[100%] w-[90%] ml-[56px] sm:mx-auto sm:flex-wrap text-center mt-4 ">
            <div className="pt-5 p-4">
              <div>
                <h3 className="flex justify-center text-[#666666]">
                  Home Cleaning
                </h3>
              </div>
              <div className=" flex justify-center mt-2">
                <img
                  className=" w-[80px] h-[80px] object-cover overflow-hidden"
                  src={pic1}
                />
              </div>
              <div>
                <p className="text-center text-[16px] text-[#666666]">
                  A clean and hygieic offices is a more productive place for
                  your staff to work and a more pleasant place for your for your
                  client to visit.br We provide hight quality,cost effective
                  office cleaning solution and currently work with a number of
                  companies across lagos
                </p>
              </div>
            </div>

            <div className="border-x-[1px]">
              <div className="pt-5 p-4">
                <h3 className="flex justify-center text-[#666666]">
                  Window Cleaning
                </h3>
              </div>
              <div className="flex justify-center mt-2">
                <img
                  className="w-[80px] h-[80px] object-cover overflow-hidden"
                  src={pic2}
                />
              </div>
              <div className="">
                <p className=" text-[16px] text-[#666666]">
                  A clean and hygieic offices is a more productive place for
                  your staff to work and a more pleasant place for your for your
                  client to visit.br We provide hight quality,cost effective
                  office cleaning solution and currently work with a number of
                  companies across lagos
                </p>
              </div>
            </div>

            <div className="pt-5 p-4">
              <div>
                <h3 className="flex justify-center text-[#666666]">
                  Office Cleaning
                </h3>
              </div>
              <div className="flex justify-center mt-2">
                <img
                  className="w-[80px] h-[80px] object-cover overflow-hidden"
                  src={pic3}
                />
              </div>
              <div>
                <p className=" text-[16px] text-[#666666]">
                  A clean and hygieic offices is a more productive place for
                  your staff to work and a more pleasant place for your for your
                  client to visit.br We provide hight quality,cost effective
                  office cleaning solution and currently work with a number of
                  companies across lagos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <img className="w-[250px] " src={pic4} />
          </div>
          <div className="flex-col items-center ">
            <div className=" sm:flex sm:flex-col">
              <h3 className="text-[#1239ac] sm:text-[10px]">WORK PROCESS</h3>
            </div>
            <div className="sm:flex sm:flex-col sm:items-center">
              <h2 className="flex justify-center text-black font-bold text-[30px] sm:text-[15px]">
                How it Work
              </h2>
            </div>
            <div className="flex flex-col items-center text-[#1239ac] font-extrabold">
              <h3>– ————</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center pt-10 justify-around gap-3 sm:mx-auto sm:flex-wrap sm:gap-10">
          <div className="flex">
            <img
              className="h-[300px] w-[300px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[250px] sm:w-[250px] sm:rounded-full"
              src={pic5}
            />
            <h2>
              <span></span>
            </h2>
          </div>
          <div>
            <img
              className="h-[300px] w-[300px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[250px] sm:w-[250px] sm:rounded-full"
              src={pic6}
            />
            <h2>
              <span></span>
            </h2>
          </div>
          <div>
            <img
              className="h-[300px] w-[300px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[250px] sm:w-[250px] sm:rounded-full"
              src={pic7}
            />
            <h2>
              <span></span>
            </h2>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="flex  justify-center">
            <div className="bg-[#1239ca] flex items-center  w-[90%] h-[530px] rounded-[10px] sm:w-screen sm:h-80 bg-cover bg-no-repeat">
              <div
                className="bg-cover bg-no-repeat w-[55%] min-h-[80vh] py-20 relative  "
                style={{ backgroundImage: `url(${pic9})` }}
              >
                <img
                  className="h-[280px] w-[450px] absolute top-0 rounded-[5px] "
                  src={pic8}
                />
              </div>
            </div>
            <div>
              <img src="" />
            </div>

            {/* <div>
             <p>
              +2347086758
             </p>
            < p>
               
             </p>
             <p>
            +2349036116362
             </p>
            </div> */}
          </div>
          <div>
            <div>
              <p>Let's Talk?</p>
            </div>
            <div>
              <p>Get a quick response within 24 hours</p>
            </div>
            <div>
              <p>
                It's all about the humans behind a brand and those experiencing
                it, we're right there. In the middle performance quick
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <p>1267</p>
            <p> orders</p>
          </div>
          <div className="">
            <p>846</p>
            <p>Trusted clients</p>
          </div>
          <div>
            <p>36</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Service;
