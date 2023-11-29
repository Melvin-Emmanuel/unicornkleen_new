import { FaPlay } from "react-icons/fa";
import Smiling from "../../assets/assets/images/smiling.png"

const Card1 = () => {
  return (
    <div className=' bg-right bg-contain bg-no-repeat pl-[50px] h-[600px] flex  flex-col
     sm:ml-[0px] sm:h-[300px] sm:p-4 sm:flex sm:flex-row sm:gap-5 sm:bg-cover sm:bg-center
     md:ml-[0] sm: '
      style={{backgroundImage: `url(${Smiling})`}}                                           
      
     
     >
      <div className="mt-[150px]
      sm:mt-0 sm:flex sm:flex-col sm:pt-6 sm:pl-10 sm:gap-5 sm:items-center sm:text-center ">
      <h3 className='text-[white] text-[30px]     sm:text-[23px]  '> BEST CLEANING SERVICE</h3>
      
      <h2 className='text-[rgb(255,255,255)]   text-[50px] font-bold
       sm:text-[30px] sm:leading-9 sm:font-semibold '> Amazing quality  cleaning <br className=" sm:hidden p-none m-[none]" /> service  agency</h2>
      <br className= "sm:hidden" />
      <br className="sm:hidden" />

      <div  className="flex items-start gap-5
      sm:flex sm:flex-col 
      ">
      
      <button className='text-[white] transition ease-in duration-700 flex justify-center  items-center text-center rounded-[7px] font-bold h-[55px] w-[170px] bg-[#06278a] sm:w-[250px] sm:hover:border-violet-900 '>BOOK A SCHEDULE</button>
      <button className='text-[white] transition ease-in-out duration-700 shadow-sm flex justify-center  items-center text-center rounded-[100%] h-[55px] w-[55px] bg-[#FFB400] sm:hidden'> <FaPlay/> </button>
      </div>
      
      </div>
      

     
     
    </div>
  )
}

export default Card1




