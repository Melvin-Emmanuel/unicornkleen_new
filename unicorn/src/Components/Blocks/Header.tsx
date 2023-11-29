import React from 'react'

import logo from "../../assets/assets/images/IMG-20231011-WA0007-1.jpg"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'

const Header:React.FC = () => {
  return (
    
    <div className='bg-[white] p-10 h-[50px] w-[100%] flex justify-between items-center md:p-2 sm:hidden '>
      <div className='h-[30px] w-[100px] sm:h-[30px] sm:w-[100px]'>
        <img
        className='h-[30px] w-[100px] object-cover'
        src={logo}
        />
      </div>
      <nav className='text-[#1239AC] flex justify-between text-center p-[12px] gap-[30px] sm:hidden md:hidden cursor-pointer'>
        <nav className=' text-[18px]'> Home</nav>
        <nav className=' text-[18px]'> About</nav>
        <Link to="Blog">
        <nav className=' text-[18px]'> Blog</nav>
        </Link>
        
        <nav className=' text-[18px]'> Service</nav>
       
       
      </nav>

      <div className='  md:text-[#1239AC] md:h-[30px] md:m-5 md:text-[28px] xl:hidden lg:hidden 2xl:hidden sm:h-[30px]  sm:text-[28px] sm:text-[#1239AC]'>
        <GiHamburgerMenu />
      </div>

<div className='flex justify-between gap-5 items-center '>
  <Link to="login">
  <button className='text-[white] p-[5px] flex flex-col items-center text-center rounded-[7px] h-[40px] w-[100px] bg-[#1239AC] md:hidden sm:hidden'>Login</button>

  </Link>

  <Link to="signup">
  <button className='text-[white] p-[5px] flex flex-col items-center text-center rounded-[7px] h-[40px] w-[100px] bg-[#1239AC] md:hidden sm:hidden'>Sign Up</button>

  </Link>


    
</div>
      
      



    </div>
  )
}

export default Header
