
import Clearner from "../../assets/assets/images/cleaner.jpg"
import Back from "../../assets/assets/images/28-removebg-preview.png"
import { GiCheckMark } from "react-icons/gi";
import Bubble from "../../assets/assets/bubble-light.png"

const Card3 = () => {
  return (
    <div className=' bg-right-bottom bg-no-repeat items-center bg-auto p-10   h-[650px] flex justify-between w-[100%] 
    sm:flex sm:flex-col  sm:p-5 sm:pt-10 sm:pb-20  sm:bg-hidden  sm:gap-5 sm:h-[950px]
     md:flex md:flex-col md:p-2 md:h-[720px] md:bg-cover
    '
    style={{backgroundImage: `url(${Back})`}}
    
    

    >
    <div className='ml-10 h-[350px]  
   sm:hidden
   md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-0 lg:hidden xl:hidden 2xl:hidden
   lg:w-[100%]
    '>
      <img
          className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner}
     />
    
    </div>
    
    <div className=' text-[white] h-[350px] ml-5 w-[45%]  text-left gap-5
    sm:ml-0 sm:p-1 sm:w-[100%]  sm:text-center sm:flex sm:flex-col 
    md:ml-0  md:items-center md:flex md:flex-col
    lg:w-[45%]
    '>
      <p className="sm:text-left">ONE TIME / RECURRING</p>
      <h3 className='text-[white] text-[30px] text-left font-semibold
        sm:leading-9 sm:text-[35px] sm:font-bold
      '> Commercial Cleaning</h3>
      
        <p className=' text-left sm:leading-6 sm:text-[16px] md:text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipising elit point
        </p>
       
        <div className="flex justify-between items-center h-[150px] w-[400px]
        sm:flex sm:flex-col sm:text-left sm:items-start sm:text-[18px]
        ">
          <div className="flex flex-col gap-3 sm:gap-2">
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]"> Ofice</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Medical Facilities</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Resturant</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Government Facilities</p>
            </div>
            
          </div>
          <div className="m-5 flex flex-col gap-3 sm:ml-0 sm:gap-2 sm:m-2">
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Shop</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Factories</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Airport</p>
            </div>
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Showroom</p>
            </div>
            
          </div>

        </div>
        <br />
        

        <button className='text-[white] transition ease-in duration-700 flex justify-center  items-center text-center rounded-[7px] h-[55px] w-[170px] bg-[#06278a]  sm:hidden'>Free Estimate</button>
       
       
      
       
      
    </div >
    

    <div className=' 
   sm:ml-0 sm:flex sm:items-left sm:h-[300px] sm:w-[100%]  sm:flex-col sm:gap-5 
   md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-0 lg:hidden xl:hidden 2xl:hidden
   lg:w-[100%]
    '>
      <button className='text-[white] transition ease-in duration-700 flex justify-center  items-center text-center rounded-[7px] h-[55px] w-[170px] bg-[#06278a] 
     sm:h-[80px] md:hidden lg:hidden 2xl:hidden
    '>Free Estimate</button>

      <img
          className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner}
     />
    
    </div>

    <div className='relative h-[430px] w-[44%]  ml-10 sm:hidden md:hidden
  
    '>
    <img
        className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner} />
    
    </div>
    <br className='sm:hidden lg:hidden'/>


    

    <div className="absolute top-3 left-3 sm:hidden" >
      <img src={Bubble} alt="" />

    </div>
    
  </div>
  )
}

export default Card3
