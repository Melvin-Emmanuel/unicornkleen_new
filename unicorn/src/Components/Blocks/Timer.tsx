import React from 'react'
import {AiOutlineClockCircle} from "react-icons/ai"

const Timer:React.FC = () => {
  return (
    <div className='bg-[#1239AC] text-[white] h-[50px] gap-[15px] flex justify-center items-center'>
      
      <div className='text-[20px] flex gap-5 items-center justify-center'>
       <p className='text-[30]'> <AiOutlineClockCircle />  </p> 
      
      <h3>  Working Hours: 8:00am - 7:00pm</h3>
      </div>
      
    </div>
  )
}

export default Timer
