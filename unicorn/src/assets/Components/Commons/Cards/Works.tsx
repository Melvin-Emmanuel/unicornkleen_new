
import One from "../../../assets/images/afro-woman.jpg"

import Boy from "../../../assets/images/withbg.jpg";

import Window  from "../../../assets/images/side-view-adult.jpg"

const Works = () => {
  return (
    <div
      className="h-[500px] text-center bg-[white] 
    sm:h-[750px] sm:p-2
    md:h-[850px] md:p-2
    "
    >
      <br className="sm:hidden" />
      <br className="sm:hidden" />
      <p className="text-[#1239AC]">Work Process</p>
      <h3 className="text-[#474545] text-[30px]">How it Works</h3>
      <br />
      <div
        className="flex justify-around items-center
        sm:flex sm:flex-col  md:flex md:flex-col 
        "
      >
        <div>
          <div
            className="h-[250px] w-[250px] rounded-full  bg-center bg-cover bg-no-repeat 
                    sm:h-[150px] sm:w-[150px]
                    md:h-[150px] md:w-[150px]
                    lg:h-[200px] lg:w-[200px]
                    "
            style={{ backgroundImage: `url(${Boy})` }}
          ></div>
          <br className="sm:hidden" />

          <p className="text-[#495057]">Book Online Form</p>
        </div>
        <br className="lg:hidden xl:hidden 2xl:hidden" />

        <div>
          <div
            className="h-[300px] w-[300px] rounded-full bg-center bg-cover bg-no-repeat
                    sm:h-[200px] sm:w-[200px]
                    md:h-[200px] md:w-[200px]
                    lg:h-[250px] lg:w-[250px]
                    "
            style={{ backgroundImage: `url(${One})` }}
          ></div>
          <br className="sm:hidden" />
          <p className="text-[#495057]">Get Expert Cleaners</p>
        </div>
        <br className="lg:hidden xl:hidden 2xl:hidden" />
        <div>
          <div
            className="h-[250px] w-[250px] rounded-full bg-center bg-cover bg-no-repeat
                     sm:h-[150px] sm:w-[150px]
                     md:h-[150px] md:w-[150px]
                     lg:h-[200px] lg:w-[200px]
                    "
            style={{ backgroundImage: `url(${Window})` }}
          ></div>
          <br className="sm:hidden md:hidden" />
          <p className="text-[#495057]">Relax & Enjoy Cleaning</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
