import { FiPlus } from "react-icons/fi";


const CountDown = () => {
  return (
    <div className='bg-[#1239AC] h-[350px] items-center
     sm:h-[600px] sm:pt-[50px] md:h-[450px] md:p-3 sm:items-center sm:flex sm:justify-center 
     '>
      <div className='flex justify-around text-center items-center h-[300px]
      sm:flex sm:flex-col sm:gap-2 md:flex md:flex-col 
      '>
        <div className="relative
         sm:border-2 sm:w-[300px] sm:relative sm:text-[white] sm:h-[200px] sm:items-center sm:flex sm:flex-col sm:text-center sm:justify-center sm:p-4
         ">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[60px] md:text-[50px] '>768</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Order</p>
        <p className="text-[yellow] top-5 left-[150px] text-[35px] font-bold absolute
        sm:left-[200px] 
        "> <FiPlus /> </p>
        
        </div>

        <div className="relative
          sm:border-2 sm:w-[300px] sm:relative sm:text-[white] sm:h-[200px] sm:items-center sm:flex sm:flex-col sm:text-center sm:justify-center sm:p-4

        ">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[60px] md:text-[50px]'>152</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Trusted Clients</p>
        <p className="text-[yellow] top-5 left-[150px] text-[35px] font-bold absolute 
        sm:left-[200px]
        "> <FiPlus /> </p>
        </div>

        <div className="relative
          sm:border-2 sm:w-[300px] sm:relative sm:text-[white] sm:h-[200px] sm:items-center sm:flex sm:flex-col sm:text-center sm:justify-center sm:p-4

        ">
        <h1 className='font-bold text-[90px] text-[white] sm:text-[60px] md:text-[50px]'>77</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Trusted Clients</p>
        <p className="text-[yellow] top-5 left-[150px] text-[35px] font-bold absolute 
        sm:left-[190px]
        "> <FiPlus /> </p>
        </div>
        
        

      </div>
    </div>
  )
}

export default CountDown
