
import Afro from "../../../assets/images/afro-woman.jpg"

const Card2 = () => {
  return (
    <div
      className=" p-10 h-[430px] bg-[white] flex justify-between 
     sm:p-2 sm:flex sm:flex-col sm:h-[480px] sm:items-center
     md:p-2 md:flex md:flex-col md:h-[700px] md:items-center
     
     "
    >
      <div className="ml-5 h-[350px] w-[45%] sm:ml-0 sm:flex sm:items-center sm:w-[100%] md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-[0]">
        <img
          className="h-[100%] w-[100%] object-cover rounded-[5px]"
          src={Afro}
        />
      </div>

      <div className=" items-center ml-10 sm:ml-0 md:ml-0  sm:text-center  md:text-center lg:w-[50%]">
        <h3 className="text-[#474545] text-[40px] text-center leading-10 sm:leading-9 sm:text-[30px] sm:p-[0] sm:font-bold sm:text-center md:leading-10 md:text-[40px] md:font-bold md:text-center">
          {" "}
          We are committed to give <br className="sm:hidden md:hidden" /> our
          best service
        </h3>
        <br className="sm:hidden md:hidden" />
        <div className="h-[100px] w-[650px] flex justify-center items-center shadow-md  sm:hidden md:hidden lg:h-[80px] lg:w-[470px]">
          <p className="p-7 text-center sm:p-1 sm:text-[15px] md:text-center">
            Local operation team on call 24 hours a day, available to work at a
            moment’s notice
          </p>
        </div>
        <br className="md:hidden sm:hidden" />
        <p className="text-[14px]   sm:hidden md:hidden ">
          {" "}
          Friendly bachelor entrance to on by. Extremity as if breakfast
          agreement. Off now mistress provided out{" "}
          <br className="sm:hidden lg:hidden" /> horrible opinions. Prevailed mr
          tolerably discourse assurance estimable applauded ro so. Him
          everything <br className="sm:hidden lg:hidden" /> melancholy
          uncommonly but solicitude inhabiting projection
        </p>

        <div
          className="h-[100px] w-[650px lg:w-[400px]
        shadow-md sm:h-[160px] sm:w-[100%]  sm:text-center
        md:h-[150px] md:w-[100%] md:text-center lg:hidden xl:hidden 2xl:hidden
        
        "
        >
          <p
            className="p-7 items-center sm:p-2
           sm:text-[12px] sm:items-center sm:flex
           md:text-[15px] md:items-center md:flex md:p-1
           "
          >
            Local operation team on call 24 hours a day, available to work at a
            moment’s notice
          </p>
          <br className="sm:hidden" />
          <p className="sm:text-[12px] md:text-[16px]  ">
            {" "}
            Friendly bachelor entrance to on by. Extremity as if breakfast
            agreement. Off now mistress provided out horrible opinions.
            Prevailed mr tolerably discourse assurance estimable applauded ro
            so. Him everything melancholy uncommonly but solicitude inhabiting
            projection
          </p>
        </div>
        <br />
        <button
          className="text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[30px] w-[170px] bg-[#1239AC]
                sm:hidden md:hidden
        "
        >
          Contact Us
        </button>
      </div>
      <br />
    </div>
  );
};

export default Card2;
