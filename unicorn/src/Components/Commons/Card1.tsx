import { FaPlay } from "react-icons/fa";
import Smiling from "../../assets/assets/images/smiling.png"

const Card1 = () => {
  return (
    <div className='ml-[100px] bg-right bg-contain bg-no-repeat h-[600px] flex  flex-col
     sm:h-[200px] sm:pt-20 sm:pb-20 sm:pr-10 sm:pl-10 sm:bg-center  sm:bg-contain sm:w-[100%] sm:m-hidde sm:ml-0 '
     style={{ backgroundImage: `url(${Smiling})`}}                                            
      
     
     >
      <div className="mt-[150px]">
      <h3 className='text-[white] text-[25px]    sm:text-[20px] sm:mt-[2px] '> BEST CLEANING SERVICE</h3>
      
      <h2 className='text-[white]  text-[60px] font-bold sm:text-[25px]'> Amazing quality cleaning <br className="p-none m-[none]" /> service agency</h2>
      <br className= "sm:hidden" />
      <br className="sm:hidden" />

      <div  className="flex items-start gap-5">
      
      <button className='text-[white] transition ease-in duration-700 flex justify-center  items-center text-center rounded-[7px] h-[55px] w-[170px] bg-[#06278a] sm:none'>BOOK A SCHEDULE</button>
      <button className='text-[white] transition ease-in-out duration-700 shadow-sm flex justify-center  items-center text-center rounded-[100%] h-[55px] w-[55px] bg-[#FFB400] sm:none'> <FaPlay/> </button>
      </div>
      
      </div>
      

     
     
    </div>
  )
}

export default Card1




