

import Smiling from "../../../assets/images/smiling.png"


const Card1 = () => {
  return (
    <div className='ml-[50px] bg-right bg-contain bg-no-repeat h-[500px]
     sm:h-[200px] sm:p-[10px] sm:bg-center sm:bg-contain sm:w-[100%] sm:m-hidde sm:ml-0 '
     style={{ backgroundImage: `url(${Smiling})`}}
      
     
     >
      <h3 className='text-[white] text-[30px]  mt-[30px] sm:text-[20px] sm:mt-[2px] '> BEST CLEANING SERVICE</h3>
      <h2 className='text-[white] text-[70px] font-bold sm:text-[25px]'> Amazing quality cleaning <br /> service agency</h2>
      <br className= "sm:hidden" />
      <br className="sm:hidden" />
      <button className='text-[white] flex justify-center  items-center text-center rounded-[7px] h-[50px] w-[170px] bg-[#FFB400] sm:h-[20px] sm:w-[50px] sm:text-[5px] sm:flex'>BOOK A SCHEDULE</button>
    </div>
  )
}

export default Card1




