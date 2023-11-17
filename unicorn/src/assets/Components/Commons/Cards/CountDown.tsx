
const CountDown = () => {
  return (
    <div className='bg-[#1239AC] h-[200px]
     sm:h-[300px] sm:p-3 md:h-[350px] md:p-3
     '>
      <div className='flex justify-around text-center items-center
      sm:flex sm:flex-col md:flex md:flex-col 
      '>
        <div>
        <h1 className='font-bold text-[90px] text-[white] sm:text-[40px] md:text-[50px]'>768</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Order</p>
        </div>

        <div>
        <h1 className='font-bold text-[90px] text-[white] sm:text-[40px] md:text-[50px]'>152</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Tusted Clients</p>
        </div>

        <div>
        <h1 className='font-bold text-[90px] text-[white] sm:text-[40px] md:text-[50px]'>5</h1>
        <p className=' text-[20px] text-[white] sm:text-[15px] md:text-[15px]'>Years Of Experience</p>
        </div>
        
        

      </div>
    </div>
  )
}

export default CountDown
