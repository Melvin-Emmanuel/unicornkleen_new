import React, {useState} from 'react'
 import pic from "../../assets/Cleaning tools.jpg"
import { useNavigate } from 'react-router-dom';
 import {loginUser} from  "../Utils/ApiCalls"
import { Link } from 'react-router-dom';

const Login :React.FC= () => {
  const Navigate = useNavigate() 
  const [formData, setFormData] = useState ({
    Email: "",
    Password: "",
  });

  const onChangeForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }))
  }


  const  LoggingUser = async () => {
    try
    {
      const res = await loginUser (formData)
      Navigate("/landing")
      console.log("this is a form", res)
    }catch(err)
    {
      return err
    }
  }


  return (
    <div>
      {/* <div className='w-[100%] min-h-[70vh]  bg-cover bg-center bg-no-repeat py-20 sm:mx-auto sm:w -[100%] ' style={{backgroundImage: `url(${pic})`}}> */}
        <div className='flex items-center justify-center pt-[50px] sm:mx-auto sm:flex-wrap'>
        <div className='bg-[#1239ac] flex flex-col items-center pt-[70px] h-[600px] w-[400px] rounded-[20px] sm:hidden md:hidden'>
                    <div>
                        <img
                        className='h-[300px] w-[300px] rounded-[10px] object-cover overflow-hidden sm:h-[150px] sm:w-[150px]'
                        src={pic} alt="" />
                    </div>
                    <br />
                    <div className='pt-[90px] sm:pt-6'>
                        <p className='text-[white'>Welcome to unicorn Kleen <br /> a place where all your worries about <br /> are meet...</p>
                        <p className='text-[white]'>you are just a step away...</p>
                    </div>
                </div>
          {/* <div className='bg-[#1239ac] h-[600px] w-[400px] rounded-[20px] sm:w-[280px] sm:h-[400px]'>
            <img 
            className=''
            src="" alt="" />
          </div> */}
          <div className='h-[600px] w-[400px] shadow-xl rounded-[20px] p-[10px] sm:mx-auto sm:flex-wrap sm:flex-col sm:items-center sm:w-[250px] sm:h-[500px] md:mx-auto md:flex-wrap md:w-[700px]'>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              LoggingUser();
            }}
            >
              <h1 className='text-[#1239ac] text-[50px] font-bold text-center sm:text-[18px] sm:text-center md:text-[24px]'>SIGN IN</h1>
              <div className='p-5'>
                <span className='sm:text-[12px]'>Email</span>
                <input
                 onChange={onChangeForm}
                 name='Email'
                className='h-[40px] w-[350px] p-3 rounded-[10px] border-gray border-2 border-solid outline-none sm:w-[200px] sm:h-[30px] sm:p-2 md:w-[600px] md:rounded-none'
                placeholder='Email'
                />
                </div>
                 <div className='p-5 flex flex-col'>
                  <span>Password</span>
                  <input
                    onChange={onChangeForm}
                    name='Password'
                  className='h-[40px] w-[350px] border-gray border-2 border-solid outline-none rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[30px] md:w-[600px] md:rounded-none'
                            placeholder='Password'
                            />
                            
              </div>                          
              <div>
                 <h3 className='text-end  text-[#1239ac] pt-2 sm:flex sm:items-center sm:justify-center'>Forgot Password</h3> 
              </div>             
              <div className='flex items-center justify-center pt-5'>
                <button className='h-[40px] w-[350px] bg-[#1239ac] text-[white] rounded-[10px] sm:w-[150px] sm:h-[30px] md:rounded-[5px] md:w-[400px]'>Login</button>
              </div>
              <div className='flex gap-16 pt-[30px] p-5  sm:flex sm:items-center sm:gap-5'>
              <h3>Do not have an account?</h3>
              <Link to="/signup">
              <h3 className='text-[#1239ac]'>Sign Up</h3>
              </Link>
           
            
            </div>
            </form>
         
          </div>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default Login
