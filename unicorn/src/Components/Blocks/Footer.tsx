import React from 'react'
import Unicorn from "../../assets/images/IMG-20231011-WA0007-1.jpg"
// import {BsFacebook} from "react-icons/bs"
// import {BsInstagram} from "react-icons/bs"
// import {BiLogoGmail} from "react-icons/bi"

const Footer:React.FC = () => {
  return (
    <div className=' flex  justify-between  bg-[#1239AC] h-[300px] p-[50px] gap-[250px] '>
         <div className=' flex flex-col '>
                <div className='h-[90px]  w-[270px]'>
                <img className='h-[100%] w-[100%]'
                src={Unicorn} alt="" />
                </div> 
                <br />
                <button className='text-[white] p-[5px] flex flex-col bg-[#FFB400] items-center rounded-[7px] h-[40px] w-[270px]'>Book Now</button>     
                <br />
                <div className=' flex gap-5 text-[30px] cursor-pointer text-[white]'>
                    {/* <BsFacebook/>
                    <BsInstagram/>
                    < BiLogoGmail/> */}
                </div>
            </div>
            
        <div className='flex h-[300px]  gap-[100px] text-[white] cursor-pointer'>
           
            <div>
                <h2 className='font-bold text-[white]'>HOME</h2>
                <p>About us</p>
                <p>Services</p>
                <p>Bookings</p>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Contacts</p>
            </div>
            <div>
                <h2 className='font-bold text-[white]'>SERVICES</h2>
                <p>Commercial Cleaning</p>
                <p>Private Cleanning</p>
                <p>Residential Cleaning</p>
                <p>Enviromental Cleaning</p>
            </div>
            
            <div>
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
