
import Clearner from "../../../assets/images/cleaner.jpg"
import Back from "../../../assets/images/28-removebg-preview.png"

const Card3 = () => {
  return (
    <div className=' bg-right-bottom bg-no-repeat bg-auto p-10  h-[400px] flex justify-between w-[100%] 
    sm:flex sm:flex-col sm:h-[500px] sm:p-2
     md:flex md:flex-col md:p-2 md:h-[720px] md:bg-cover
    '
    style={{backgroundImage: `url(${Back})`}}

    >
    <div className='ml-10 h-[350px] w-[45%] 
   sm:ml-0 sm:flex sm:items-center sm:h-[450px] sm:w-[100%] 
   md:h-[450px] md:flex md:items-center md:w-[100%] md:ml-0 lg:hidden xl:hidden 2xl:hidden
   lg:w-[100%]
    '>
      <img
          className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner}
     />
    
    </div>
    
    <div className=' items-center text-[white] h-[330px] ml-5 
    sm:ml-0 sm:p-2 sm:w-[100%]  sm:text-center sm:flex sm:flex-col
    md:ml-0  md:items-center md:flex md:flex-col
    lg:w-[45%]
    '>
      <h3 className='text-[white] text-[40px] text-center font-semibold
        sm:leading-9 
      '> Commercial Cleaning</h3>
        <p className=' text-center sm:leading-6 sm:text-[12px] md:text-[12px]'>Local thrss operation team on call 24 hours a day, <br className='lg:hidden xl:hidden 2xl:hidden' /> available to
            work at a moment’s notice
        </p>
       <table className='table-auto 
       sm:text-center 
       md:text-center
       '>
       <tbody className='text-[20px] flex justify-between items-center
       sm:text-[12px]  sm:flex sm:justify-between
       md:text-[15px]  md:flex md:justify-between
       '>
            <tr className='flex flex-col leading-10 sm:leading-7  md:leading-7  sm:text-left md:text-left'>
            <td>Office</td>
            <td>Medical Facility</td>
            <td>Restaurant</td>
            <td>Government Facilities</td>
            </tr>
            <tr className='flex flex-col leading-10 ml-20  sm:leading-7 sm:ml-13 md:leading-7 md:ml-13 sm:text-left  md:text-left'>
            <td>Shop</td>
            <td>Factories</td>
            <td>Airports</td>
            <td>Showrooms</td>
            </tr>
   
         </tbody>

       </table>
      
        <br className='sm:hidden md:hidden' />
        <br className='sm:hidden lg:hidden'/>
      <button className='text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[30px] w-[170px] bg-[#FFB400]
      sm:flex sm:text-center sm:w-[80px] sm:items-center sm:text-[10px]
      '>Contact Us</button>
    </div>

    <div className=' h-[330px] w-[45%] ml-10 sm:hidden md:hidden
  
    '>
    <img
        className='h-[100%] w-[100%] object-cover rounded-[5px]'
        src={Clearner} />
    
    </div>
    <br className='sm:hidden lg:hidden'/>
    
  </div>
  )
}

export default Card3
