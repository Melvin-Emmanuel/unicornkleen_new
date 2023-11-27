import React from 'react'
import One  from "../../assets/assets/images/afro-woman.jpg"
import Boy from "../../assets/assets/images/withbg.jpg"
import Window from "../../assets/assets/images/side-view-adult.jpg"


const Works:React.FC = () => {
  return (
    <div className=' text-center bg-[white] items-center pt-[100px] pb-[100px]
    sm:h-[950px] sm:p-2 sm:pt-[50px] sm:justify-center sm:items-center
    md:h-[850px] md:p-2
    '>
        {/* <br className='sm:hidden' />
        <br  className='sm:hidden'/>
        <br /> */}
        <p  className='text-[#1239AC] font-bold text-[20px] sm:text-[25px] sm:font-semibold'>WORK PROCESS</p>
        <br />
        <h3 className='text-[#1D2746] font-bold text-[30px]'>
            How it Works
        </h3>
        <br />
        <br />
        <div className='flex justify-around items-center
        sm:flex sm:flex-col  md:flex md:flex-col sm:items-center
        '>
        
             <div>
                    <div className='h-[180px] w-[180px] rounded-full  bg-center bg-cover bg-no-repeat 
                    sm:h-[150px] sm:w-[150px]
                    md:h-[150px] md:w-[150px]
                    lg:h-[200px] lg:w-[200px]
                    '
                    style={{backgroundImage: `url(${Boy})`}}
                    >
                    
                    </div>
                    <br className='sm:hidden' />

                    <p className='text-[#495057] sm:font-semibold'>Book Online Form</p>
             </div>
                  <br className='lg:hidden xl:hidden 2xl:hidden' />
            
                <div>
                    <div className='h-[250px] w-[250px] rounded-full bg-center bg-cover bg-no-repeat
                    sm:h-[200px] sm:w-[200px]
                    md:h-[200px] md:w-[200px]
                    lg:h-[250px] lg:w-[250px]
                    '
                    
                    style={{backgroundImage: `url(${One})`}}
                    >
                    
                    </div>
                    <br className='sm:hidden ' />
                    <p className='text-[#495057]  sm:font-semibold' >Get Expert Cleaners</p>
                </div>
                <br className='lg:hidden xl:hidden 2xl:hidden' />
                <div>
                    <div className='h-[180px] w-[180px] rounded-full bg-center bg-cover bg-no-repeat
                     sm:h-[150px] sm:w-[150px]
                     md:h-[150px] md:w-[150px]
                     lg:h-[200px] lg:w-[200px]
                    '
                    style={{backgroundImage: `url(${Window})`}}
                    >


                    </div> 
                    <br className='sm:hidden md:hidden'/>
                    <p className='text-[#495057]  sm:font-semibold' >Relax & Enjoy Cleaning</p>

                </div>
                
           

        </div>

      
    </div>
  )
}

export default Works
