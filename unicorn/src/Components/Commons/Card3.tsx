
import Clearner from "../../assets/assets/images/cleaner.jpg"
import Back from "../../assets/assets/images/28-removebg-preview.png"
import { GiCheckMark } from "react-icons/gi";
import Bubble from "../../assets/assets/bubble-light.png"

const Card3 = () => {
  return (
    <div className='relative bg-right-bottom bg-no-repeat items-center bg-auto p-10   h-[650px] flex justify-between w-[100%] 
    sm:flex sm:flex-col sm:h-[500px] sm:p-2
     md:flex md:flex-col md:p-2 md:h-[720px] md:bg-cover
    '
    style={{backgroundImage: `url(${Back})`}}
    
    

    >
    <div className='ml-10 h-[350px]  
   sm:ml-0 sm:flex sm:items-center sm:h-[450px] sm:w-[100%] 
   md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-0 lg:hidden xl:hidden 2xl:hidden
   lg:w-[100%]
    '>
      <img
          className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner}
     />
    
    </div>
    
    <div className=' text-[white] h-[350px] ml-5 w-[45%]  text-left
    sm:ml-0 sm:p-2 sm:w-[100%]  sm:text-center sm:flex sm:flex-col
    md:ml-0  md:items-center md:flex md:flex-col
    lg:w-[45%]
    '>
      <p className="">ONE TIME / RECURRING</p>
      <h3 className='text-[white] text-[30px] text-left font-semibold
        sm:leading-9 
      '> Commercial Cleaning</h3>
      
        <p className=' text-left sm:leading-6 sm:text-[12px] md:text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quasi. Maiores.
        </p>
        <br />
        <div className="flex justify-between items-center h-[150px] w-[400px] ">
          <div className="flex flex-col gap-3">
            <div className="text-[yellow] flex items-center gap-3">
            <GiCheckMark />
            <p className="text-[white]">Ofice</p>
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
          <div className="m-5 flex flex-col gap-3">
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

        <button className='text-[white] transition ease-in duration-700 flex justify-center  items-center text-center rounded-[7px] h-[55px] w-[170px] bg-[#06278a] sm:none'>Free Estimate</button>
       
       
      
       
      
    </div>

    <div className='relative h-[430px] w-[44%]  ml-10 sm:hidden md:hidden
  
    '>
    <img
        className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner} />
    
    </div>
    <br className='sm:hidden lg:hidden'/>


    <div className="absolute h-[100px] w-[250px] scale-75 translate-x-4 skew-y-3 bg-[blue] right-8 top-3
    ">

    </div>

    <div className="absolute top-3 left-3 " >
      <img src={Bubble} alt="" />

    </div>
    
  </div>
  )
}

export default Card3
