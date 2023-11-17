
const PaymentCard = () => {
  return (
    
    <div className='p-5 h-[600px] w-[100%] text-center bg-[white]   sm:h-[1600px] md:h-[1520px] lg:h-[600px] ' >
        <p className='text-[#1239AC] '> Cleaning Plans</p>
        <h3 className='text-[#474545] text-[30px]  '>
            Take a look at our pricing and 
            select your Choice
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
        sm:flex sm:flex-col sm:items-center sm:h-[1400px] sm:w-[100%] sm:gap-3
        md:flex md:flex-col md:items-center md:h-[1400px] md:w-[100%] md:gap-3
        '>
            <div className='h-[450px] w-[350px] text-[#474545] items-center flex flex-col  text-center shadow-md rounded-[10px] p-5
            sm:h-[400px] sm:w-[300px] sm:p-5 md:h-[400px] md:w-[300px] md:p-5 lg:w-[250px]
            
            '>
               <h3 className='font-bold'>Residential</h3>
               <h1>20000</h1>
               <p>FOR HOMES</p>
               <br />
               <div className='h-[40px] w-[200px] border-solid flex justify-center items-center rounded-[5px] shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex flex-col items-center rounded-[7px] h-[40px] w-[100px] bg-[#1239AC]
               sm:w-[170px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px]'>BOOK NOW</button>
            </div>


            <div className='text-[white] h-[450px] w-[350px] text-center items-center flex flex-col rounded-[10px] shadow-md bg-[#1239AC] p-5
             sm:h-[400px] sm:w-[300px] sm:p-5   md:h-[400px] md:w-[300px] md:p-5  lg:w-[250px]
            '>
            <h3 className='font-bold'>Residential</h3>
               <h1>20000</h1>
               <p>FOR HOMES</p>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#3764E8] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#1239AC] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#3764E8] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#1239AC] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[40px] w-[120px] bg-[#FFB400]
                sm:w-[170px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px]'>BOOK NOW</button>
            </div>


            <div className='h-[450px] w-[400px] text-[#474545] items-center flex flex-col  text-center shadow-md rounded-[10px] p-5
             sm:h-[400px] sm:w-[300px] sm:p-5 md:h-[400px] md:w-[300px] md:p-5 lg:w-[250px]
            
            '>
               <h3 className='font-bold'>Residential</h3>
               <h1>20000</h1>
               <p>FOR HOMES</p>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <div className='h-[40px] w-[200px] rounded-[5px] flex justify-center items-center shadow-md bg-[#D9D9D9] '>
                <p>Professional Cleaner</p>
               </div>
               <br />
               <button className='text-[white] p-[5px] flex justify-center items-center rounded-[7px] h-[40px] w-[120px] bg-[#1239AC]
               sm:w-[170px] sm:rounded-[15px] md:w-[170px] md:rounded-[15px] 
               '>BOOK NOW</button>
            </div>
        </div>
        
      
    </div>
  )
}

export default PaymentCard
