import React from 'react'
import pic from "../../assets/full-shot-man-servant-vacuuming-floor.jpg"
import {AiOutlineHome, AiOutlinePlus} from "react-icons/ai"
import pics from "../../assets/afro-woman-holding-bucket-with-cleaning-items_58466-11246.jpg"
 import pic1 from "../../assets/cheerful-dark-skinned-housewife-holds-chemical-detergent-mop-looks-gladfully.jpg"
 import pic2 from "../../assets/afro-woman-holding-bucket-with-cleaning-items_58466-11246.jpg"
 import pic3 from "../../assets/happy-african-american-volunteer-posing-city-park.jpg"
 import pic4 from "../../assets/IMG-20231022-WA0001.jpg"
 import pic5 from "../../assets/IMG-20231022-WA0000.jpg"
 import pic6 from "../../assets/IMG-20231022-WA0002.jpg"
 import pic7 from "../../assets/IMG-20231022-WA0003.jpg"
 import { Link } from 'react-router-dom'
 

const About :React.FC= () => {
  return (
    <div>
        <div className='w-full min-h-[70vh] bg-no-repeat bg-[#1239ac] bg-cover py-25 bg-blend-exclusion sm:w-[100%] sm:mx-auto md:w-[100%] ' style={{backgroundImage: `url(${pic})`}}>

            <div className='flex flex-col items-center justify-center pt-[70px] sm:mx-auto md:px-auto'>
                <div className='pt-[90px] sm:flex sm:items-center md:flex md:items-center'>
                    <h1 className='text-white text-[30px] font-bold sm:text-[18px] md:text-[18px]'>About Us</h1>
                </div>
                <div className='flex items-center  justify-center gap-2 sm:flex-wrap sm:flex-col md:flex-wrap md:flex-col'>
                <AiOutlineHome 
                 color='white'/>
                    <h4 className='text-white sm:text-[10px] md:text-[13px]'>HOME-ABOUT</h4>
                </div>
            </div>

        </div>
        <div className='bg-[white] flex w-[100%] gap-10 p-20 sm:mx-auto sm:flex-wrap sm:items-center sm:justify-center md:flex-wrap md:items-center md:justify-center md:px-auto'>
            <div className='  flex items-center justify-center w-[700px] pt-[20px]'>
                <img 
                className=' w-[650px] h-[650px] rounded-full overflow-hidden object-cover flex items-center justify-center sm:h-[100px] sm:w-[100px] sm:rounded-full sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center md:h-[550px] md:w-[550px] md:rounded-full'
                src={pics} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <div>
                <h3 className='text-[#1239ac] font-bold text-[30px] sm:w-[250px] sm:text-[16px] md:text-[20px]'>ABOUT CLEANING AGENCY</h3>
                </div>
                <div>
                    <h2 className='font-bold text-[40px] sm:w-[250px] sm:text-[18px] sm:font-bold md:w-[550px]'>We are committed to give <br /> our best services</h2>
                </div>
                <div>
                    <p className='w-[450px] sm:text-[10px] sm:w-[250px] md:w-[450px] md:text-[18px]'>Welcoming bachelor entryway for passersby extreme agreement like breakfast. Mistress gave us some terrible advice right now</p>
                </div>
                <div className='flex pt-10'>
                    <Link to='/contact'>
                    <button className='bg-[#1239ac] h-[30px] w-[120px] text-white sm:w-[80px] sm:text-[10px] sm:h-[20px]'>CONTACT US</button>
                    </Link>
                
                </div>
                  
                
                

            </div>
        </div>
        <div className='flex items-center justify-around bg-[#1239ac] w-[100%] h-[200px] sm:mx-auto sm:h-[300px] sm:flex-col flex-wrap  sm:items-center md:mx-auto  md:flex-col md:items-center md:h-[400px]'>
            <div>
                <div className='flex sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center'>
                    <h2 className='text-white font-bold text-[30px] sm:text-[15px]'>786</h2>
                    <span>
                    <AiOutlinePlus color='#DB683A' /> 
                    </span>
                </div>
                <div>
                    <h3 className='text-white sm:text-[10px]'>Order</h3>
                </div>
            </div>
            <div>
                <div className='flex sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center'>
                    <h2 className='text-white font-bold text-[30px] sm:text-[15px]'>152</h2>
                    <span>
                    <AiOutlinePlus  color='#DB683A' />  
                    </span>
                </div>
                <div>
                    <h3 className='text-white sm:text-[10px]'>Trusted Clients</h3>
                   
                </div>
            </div>
            <div>
                <div className='flex  sm:flex sm:justify-center sm:items-center md:flex md:justify-center  md:items-center'>
                    <h2 className='text-white font-bold text-[30px] sm:text-[15px]'>5</h2>
                    <span>
                    <AiOutlinePlus  color='#DB683A' />  
                    </span>
                </div>
                <div>
                    <h3 className='text-white sm:text-[10px]'>Years Of Experience</h3>
                </div>
            </div>
        </div>
        <div className='flex flex-col pt-5 bg-[white] items-center sm:mx-auto sm:flex sm:flex-col md:mx-auto md:flex md:flex-col'>
            <div>
                <div className='flex flex-col items-center sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center'>
                    <h3 className='text-[#1239ac] sm:text-[10px] md:text-[18px]'>WORK PROCESS</h3>
                </div>
                <div className='sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center'>
                    <h2 className='font-bold text-[30px] sm:text-[15px]'>How it Work</h2>
                    
                </div>
                <div className='flex flex-col items-center'>
                <h3>– ——</h3>
                </div>
            </div>       
        </div>
        <div className='flex items-center pt-10 justify-around gap-3 sm:mx-auto sm:flex-wrap sm:gap-10 md:mx-auto md:flex-wrap md:gap-20'>
                <div className='flex '>
                    <img 
                    className='h-[300px] w-[300px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[150px] sm:w-[150px] md:h-[300px] md:w-[300px] md:rounded-full'
                    src={pic1} alt="" />
                    <h2><span></span></h2>
                    
                </div>
                <div className='flex'>
                    <img
                    className='h-[400px] w-[400px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[200px] sm:w-[200px] sm:rounded-full md:h-[400px] md:w-[400px] md:rounded-full'
                    src={pic2} alt="" />
                    <h2><span></span></h2>
                    
                </div>
                <div className='flex'>
                    <img 
                    className='h-[300px] w-[300px] rounded-full bg-[black] object-cover overflow-hidden sm:h-[150px] sm:w-[150px] sm:rounded-full md:h-[300px] md:w-[300px] md:rounded-full'
                    src={pic3} alt="" />
                    <h2><span></span></h2>
                    
                </div>
            </div>
            <div className='flex items-center justify-around sm:mx-auto sm:flex-wrap sm:flex sm:flex-col sm:gap-3 sm:pt-3 md:mx-auto md:flex-wrap md:flex md:flex-col md:gap-10 md:pt-5 '>
                <div>
                    <h4 className='sm:text-[10px] text-[#1239ac] md:text-[18px]'>Book Online Form</h4>
                </div>
                <div>
                    <h4 className='sm:text-[10px] text-[#1239ac] md:text-[18px]'>Get Expert Cleaner</h4>
                </div>
                <div>
                    <h4 className='sm:text-[10px] text-[#1239ac] md:text-[18px]'>Relax & Enjoy Cleaining</h4>
                </div>
            </div>
            <div className='bg-[white] flex flex-col items-center pt-5'>
                <div>
                    <h3 className='text-[#1239ac] sm:text-[10px] md:text-[18px]'>AWESOME TEAM</h3>
                </div>
                <div>
                    <h2 className='text-[30px] font-bold sm:text-[15px] md:text-[20px]'>We have the best team when it <br /> comes to planning and organizing.</h2>
                </div>
            </div>
            <div className='flex items-center justify-center gap-12 sm:mx-auto sm:flex-wrap sm:pt-[20px] sm:gap-5 md:flex-wrap md:flex md:flex-col md:gap-10 md:pt-10'>
                <div>
                    <img
                    className='h-[300px] w-[300px] object-cover overflow-hidden bg-[black] sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[400px]'
                    src={pic4} alt="" />
                    <div className='h-[50px] w-[300px] bg-[#1239ac] sm:w-[200px] sm:h-[20px] md:h-[40px] md:w-[400px]'>
                        <h3 className='text-[white] text-center sm:text-[10px] md:text-[18px]'>Emmanuel Melvin</h3>
                    </div>
                </div>
                <div>
                    <img
                    className='h-[300px] w-[300px] object-cover overflow-hidden bg-[black]  sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[400px]'
                    src={pic5} alt="" />
                    <div className='h-[50px] w-[300px] bg-[#1239ac] sm:h-[20px] sm:w-[200px] md:h-[40px] md:w-[400px]'>
                        <h3 className='text-[white] text-center sm:text-[10px] md:text-[18px]'>Bolaji Tosin</h3>
                    </div>
                </div>
                <div>
                    <img
                    className='h-[300px] w-[300px] object-cover overflow-hidden bg-[black] sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[400px]'
                    src={pic6} alt="" />
                    <div className='h-[50px] w-[300px] bg-[#1239ac] sm:h-[20px] sm:w-[200px] md:h-[40px] md:w-[400px]'>
                        <h3 className='text-[white] text-center sm:text-[10px] md:text-[18px]'>Ikechukwu Joseph</h3>
                    </div>
                </div>
                <div>
                    <img
                    className='h-[300px] w-[300px] object-cover overflow-hidden bg-[black] sm:h-[200px] sm:w-[200px] md:h-[400px] md:w-[400px]'
                    src={pic7} alt="" />
                    <div className='h-[50px] w-[300px] bg-[#1239ac] sm:h-[20px] sm:w-[200px] md:h-[40px] md:w-[400px]'>
                        <h3 className='text-[white] text-center sm:text-[10px] md:text-[18px]'>Patience Ediri</h3>
                    </div>
                </div>
            </div>

           
      
    </div>
  )
}

export default About
