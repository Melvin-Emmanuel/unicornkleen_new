import { FiPlus } from "react-icons/fi";


const CountDown = () => {
  return (
    <div className='bg-[#1239AC] h-[350px] items-center
     sm:h-[300px] sm:p-3 md:h-[350px] md:p-3
     '>
      <div className='flex justify-around text-center items-center h-[300px]
      sm:flex sm:flex-col md:flex md:flex-col 
      '>
        <div className="relative
         sm:border-2 sm:w-[300px] sm:relative sm:text-[white] sm:h-[150px] sm:items-center sm:flex sm:flex-col sm:text-center sm:justify-center
         ">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[90px] md:text-[50px] '>768</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Order</p>
        <p className="text-[yellow] top-5 left-[150px] text-[35px] font-bold absolute
        sm:left-[230px] 
        "> <FiPlus /> </p>
        
        </div>

        <div className="relative">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[40px] md:text-[50px]'>152</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Trusted Clients</p>
        <p className="text-[yellow] top-5 left-[150px] text-[35px] font-bold absolute"> <FiPlus /> </p>
        </div>

        <div className="relative">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[40px] md:text-[50px]'>5</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Years Of Experience</p>
        <p className="text-[yellow] top-5 left-[120px] text-[35px] font-bold absolute"> <FiPlus /> </p>
        </div>
        
        

      </div>
    </div>
  )
}

export default CountDown
