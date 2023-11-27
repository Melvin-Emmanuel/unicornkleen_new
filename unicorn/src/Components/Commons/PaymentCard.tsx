import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";



const PaymentCard:React.FC = () => {
  return (
    
    <div className=' relative pt-[100px] pb-[100px] w-[100%] text-center bg-[white] flex flex-col justify-center    md:h-[1520px] lg:h-[600px] ' >
       
        <p className='text-[#1239AC] text-[20px] font-bold '> CLEANING PLANS</p>
        <h3 className='text-[#474545] p-9 text-[30px] font-bold text-center '>
            Take a look at our Pricing and  <br />
            select Your Choice
        </h3>
        {/* <div className='flex items-center justify-center '>
        <p className='text-[#1239AC] sm:text-[10px]'> Cleaning Plans</p>
        <h3 className='text-[#474545] text-[30px]'>
            Take a look at our pricing and 
            select your Choice
        </h3>
        </div> */}
       
        <br />
        <div className='flex justify-around
        sm:flex sm:flex-col sm:items-center sm:h-[1600px] sm:w-[100%] sm:gap-5
        md:flex md:flex-col md:items-center md:h-[1400px] md:w-[100%] md:gap-3
        '>
            <div className='h-[500px] w-[350px] text-[#474545] items-center flex flex-col  text-center shadow-xl  p-5
            sm:h-[550px] sm:w-[300px] sm:p-5 md:h-[500px] md:w-[300px] md:p-5 lg:w-[250px]
            
            '>
               <h3 className='font-bold'>Residential</h3>
               <h1 className='font-bold text-[70px]'>20</h1>
               <p>FOR HOMES</p>
               <br />
               <div className='h-[40px] w-[200px] p-2 border-solid flex justify-between items-center rounded-[5px]  shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2  flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2  flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <p className='text-[#FFB400]'> < MdCancel/> </p>
                
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2  flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex flex-col items-center rounded-[7px] h-[40px] w-[120px] bg-[#1239AC]
               sm:w-[200px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px]'>BOOK NOW</button>
            </div>


            <div className='text-[white] h-[500px] w-[350px] text-center items-center flex flex-col  shadow-md bg-[#1239AC] p-5
             sm:h-[550px] sm:w-[300px] sm:p-5   md:h-[500px] md:w-[300px] md:p-5  lg:w-[250px]
            '>
            <h3 className='font-bold'>Residential</h3>
               <h1  className='font-bold text-[70px]'>20</h1>
               <p>FOR PRENIUM</p>
               <br />
               <div className='h-[40px] w-[240px] p-2  flex justify-between items-center shadow-lg bg-[#3764E8] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[240px] p-2  flex justify-between items-center shadow-md bg-[#1239AC] '>
                <p>Professional Cleaner</p>
                <p className='text-[#FFB400]'> < MdCancel/> </p>
               </div>
               <br />
               <div className='h-[40px] w-[240px] p-2  flex justify-between items-center shadow-md bg-[#3764E8] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[240px] p-2  flex justify-between items-center shadow-md bg-[#1239AC] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[40px] w-[120px] bg-[#FFB400]
                sm:w-[200px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px]'>BOOK NOW</button>
            </div>
            <div className='h-[500px] w-[350px] text-[#474545] items-center flex flex-col  text-center shadow-xl  p-5
            sm:h-[550px] sm:w-[300px] sm:p-5 md:h-[500px] md:w-[300px] md:p-5 lg:w-[250px]
            
            '>
               <h3 className='font-bold'>Residential</h3>
               <h1 className='font-bold text-[70px]'>20</h1>
               <p>FOR RESIDENTIAL</p>
               <br />
               <div className='h-[40px] w-[200px] p-2 border-solid flex justify-between items-center rounded-[5px]  shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2 flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2  flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <p className='text-[#FFB400]'> < MdCancel/> </p>
                
               </div>
               <br />
               <div className='h-[40px] w-[200px] p-2  flex justify-between items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
                <IoIosCheckmarkCircle/>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex flex-col items-center rounded-[7px] h-[40px] w-[120px] bg-[#1239AC]
               sm:w-[200px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px]'>BOOK NOW</button>
            </div>


           
        </div>
        
        
      
    </div>
  )
}

export default PaymentCard
