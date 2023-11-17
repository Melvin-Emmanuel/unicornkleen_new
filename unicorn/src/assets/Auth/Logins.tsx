import React from 'react'
import pic from "../../assets/1633015801-68-nigeria-cleaning-service-ltd-removebg-preview.png"
import {AiOutlineUser, AiOutlineFacebook, AiOutlineGooglePlus} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"
import pic1 from "../../assets/Cleaning tools.jpg"

const Login :React.FC= () => {
  return (
    <div>
        <div className='w-full min-h-[40vh] bg-cover bg-[#1239ac] bg-no-repeat bg-center py-20 h-auto bg-gradient-to-r from-[#1239ac] to-[transparent]' style={{backgroundImage: `url(${pic})`}}>
        <div className='flex items-center justify-center bg-[white]   '>
                <div>
                  <img 
                    className='w-[350px] object-cover overflow-hidden'
                    src={pic1} alt="" />
                    {/* <h4 className='text-#1239ac w-[350px]'>Welcome to unicorn kleen <br /> a place where all your worries about are meet.....</h4> */}
                  
                </div>
                <div className='flex flex-col'>
                    <form>
                        <div className='relative flex items-center'>
                            <AiOutlineUser  size='25' color='black' className="absolute right-[80px]" />
                           
                           <input 
                            className='bg-[white] text-[#1239ac] h-[50px] w-[450px] p-5 rounded-[5px] outline-none '
                            placeholder='Username'
                            />
                                                                                                                                                                                                                             
                        </div>
                        <br />
                        <div>
                           
                 <RiLockPasswordFill  size='30' color='black' className="absolute right-[275px] pt-3" />

                            <input 
                            className='bg-[white] h-[50px] w-[450px] p-5 rounded-[5px] text-[#1239ac] outline-none'
                            placeholder='Password'
                            />
                        </div>
                        <br />
                        <div className='flex items-center justify-center'>
                        <button className='bg-[#ffb400] h-[40px] w-[180px] rounded-[10px]'>Login</button>
                        </div>
                       
                    </form>
                    <br />
                    <div className='flex items-center justify-center gap-5'>
                    <div>
                        <h3 className='text-white'>Forget Password ?</h3>
                    </div>
                    <div>
                        <h3 className='text-white'>Sign Up</h3>
                    </div>
                   
                </div>
                <br />
                <div className='flex items-center justify-center gap-5'>
                        <div className='h-[50px] w-[250px] bg-[#0A305F] rounded-[10px] relative p-3'>

                        <AiOutlineFacebook size='30' color='white' className=" absolute bottom-3" />
                            <h3 className='flex items-center justify-center text-white  '>Facebook</h3>
                        </div>
                        <div className='h-[50px] w-[250px] rounded-[10px] bg-[#F24822] relative p-3'>

                        <AiOutlineGooglePlus size='30' color='white' className=' absolute bottom-3' />
                            <h3 className='flex items-center justify-center text-white '>Google</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
      
    </div>
  )
}

export default Login
