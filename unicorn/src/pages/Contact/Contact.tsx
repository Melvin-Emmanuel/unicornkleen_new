
import BLogCover from "../../assets/assets/portrait-adult-male-disinfecting-house_23-2148563573 1.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div className='text-black'>
      <div className="w-full h-[20rem] pt-8 flex">
        <img
          src={BLogCover}
          className="w-full h-full object-cover relative"
          alt=""
        />
        <p className="absolute  top-[20%] left-[50%] text-5xl  text-white ">
          Contact Us
        </p>
      </div>

      <div className="w-[90%] mx-auto m-0 p-4 flex justify-around md:lg:sm:flex-wrap">
        <div className="items-center w-[429px] p-10 h-[600px] rounded-lg bg-[#1239AC] gap-5 flex flex-col">
          
          <div className=" h-[200px] w-[200px] bg-[yellow]">

          </div>


          <div className="h-[150px] w-[200px] gap-3 flex flex-col items-center text-yellow-500 text-[50px] p-5">
          <FaLocationDot />
              <h3 className="text-[18px] text-[#ffffff] leading-5">
                126 Old Ojo Road, Off Agboju BusStop
              </h3>
          </div>

          <div className="h-[250px] w-[200px] gap-3 flex flex-col items-center text-yellow-500 text-[50px] p-5">
          <IoIosCall />

              <div className="flex flex-col gap-2">
              <h3 className="text-[18px] text-[#ffffff] leading-5"> 09055664421</h3>
              <h3 className="text-[18px] text-[#ffffff] leading-5"> 09055664421</h3>
              <h3 className="text-[18px] text-[#ffffff] leading-5"> 09055664421</h3>
              </div>
         

          </div>

         





        </div>
        <div className='h-[600px] w-[500px] flex flex-col p-5 gap-5  shadow-md'>
            <div className="h-[100px] w-[450px] flex flex-col">
                <h2 className="text-[#1239AC] text-[20px] font-semibold">Let's Talk</h2>
                <h3 className="text-[black] text-[16px]">It's all about the humans behind a brand and those experiencing it, 
                 we're right there. In the middle performance quick.</h3>
            </div>
            <div className="">
            <input
                 
                 name='FullName'
                className='h-[60px] w-[460px] p-3 rounded-[10px] border-black border-2 border-solid outline-none sm:w-[200px] sm:h-[30px] sm:p-2 md:w-[600px] md:rounded-none'
                placeholder='FulName'
                />
            </div>
            <div className="flex gap-5">
            <input
                 
                 name='Email'
                className='h-[40px] w-[250px] p-3 rounded-[10px] border-black border-2 border-solid outline-none sm:w-[200px] sm:h-[30px] sm:p-2 md:w-[600px] md:rounded-none'
                placeholder='Email'
                />

                <input
                 
                 name='Phone Number'
                className='h-[40px] w-[250px] p-3 rounded-[10px] border-black border-2 border-solid outline-none sm:w-[200px] sm:h-[30px] sm:p-2 md:w-[600px] md:rounded-none'
                placeholder='Email'
                /> 
            </div>
            <div>
                <input
                    
                    name='Email'
                    className='h-[220px] w-[460px] rounded-[5px] flex-col text-start border-black border-2 border-solid outline-none sm:w-[200px] sm:h-[30px] sm:p-2 md:w-[600px] md:rounded-none'
                    placeholder='Tell us about your project'
                />


            </div>
            <div className="pl-7">
              <button className="text-[white] flex justify-center  items-center text-center rounded-[7px] h-[55px] w-[400px] transition ease-in-out delay-150 bg-[#06278a] hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 ...">
              Submit
              </button>
            </div>
           

        </div>
           
              
        </div>
          <br />
          <br />
          <br />
          <br />
    </div>
  );
}

export default Contact