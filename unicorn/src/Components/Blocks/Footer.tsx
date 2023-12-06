import React from 'react'
import Unicorn from "../../assets/images/IMG-20231011-WA0007-1.jpg"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BiLogoGmail} from "react-icons/bi"

const Footer:React.FC = () => {
  return (
    <div className=' flex  justify-between  bg-[#1239AC]  p-[50px] gap-[10px]
    sm:flex sm:flex-col md:h-[500px] sm:justify-center sm:items-center  sm:text-left

    '>
         <div className=' w-[30%]'>
                <div className='h-[90px]  w-[270px] sm:w-[200px]'>
                <img className='h-[100%] w-[100%]'
                src={Unicorn} alt="" />
                </div> 
                <br />
                <button className='text-[white] p-[5px] flex flex-col bg-[#FFB400] items-center rounded-[7px] h-[40px] w-[270px] sm:w-[200px]'>Book Now</button>     
                <br />
                <p className='text-[white] sm:text-left'>
                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing
                </p>
                <div className=' flex gap-5 text-[30px] cursor-pointer text-[white]'>
                    <BsFacebook/>
                    <BsInstagram/>
                    < BiLogoGmail/>
                </div>
            </div>
            
        <div className='flex h-[300px] w-[70%] justify-between border-l-[#858589]  border-r-0 border-t-0 border-b-0  border-4 p-5 gap-[100px] text-[black] cursor-pointer
         md:flex md:flex-col 
         sm:flex sm:flex-col sm:w-0
         '>
           
            <div className=' text-[18px] text-[#ead9d9] '>
                <h2 className='font-bold text-[white]'>HOME</h2>
                <p>About us</p>
                <p>Services</p>
                <p>Bookings</p>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Contacts</p>
            </div>
            <div className=' text-[18px] text-[#ead9d9] '>
                <h2 className='font-bold text-[white]'>SERVICES</h2>
                <p>Commercial Cleaning</p>
                <p>Private Cleanning</p>
                <p>Residential Cleaning</p>
                <p>Enviromental Cleaning</p>
            </div>
            
            <div className=' text-[18px] text-[#ead9d9]'>
                <h2 className='font-bold text-[white]'>Blog</h2>
                <p>Commercial Cleaning</p>
                <p>Private Cleanning</p>
                <p>Residential Cleaning</p>
                <p>Enviromental Cleaning</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
