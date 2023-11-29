import React, {useState} from 'react'
import  {LoginAdmin} from  "../../Components/Utils/ApiCalls"
import { useNavigate } from 'react-router-dom'
import pic from "../../assets/Cleaning tools.jpg"
import { Link } from 'react-router-dom'


const AdminLogin :React.FC= () => {
    const Navigate = useNavigate()
    const [formData, setFormData] = useState ({
        Email: "",
        Password: "",
    })
    
    const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

      const LogAdmin = async () => {
        try
        {
            const res = await LoginAdmin(formData)
            Navigate("/Adminsignin");
            console.log("this is for form", res)
        }catch(err) {
            return err
        }
      }

  return (
    <div>
              <div className='flex items-center justify-center pt-[50px] sm:mx-auto sm:flex-wrap'>
            <div className='flex flex-col items-center h-[600px] w-[400px] pt-[70px] rounded-[20px]  bg-[#1239ac] sm:hidden md:hidden'>
                <div>
                   <img 
                   className='h-[300px] w-[300px] rounded-[10px] object-cover overflow-hidden'
                   src={pic} alt="" />
                </div>
                <div className='pt-[90px] sm:pt-6'>
                        <p className='text-[white] sm:text-[10px]'>Welcome to unicorn Kleen <br /> a place where all your worries about <br /> are meet...</p>
                        <p className='text-[white] '>you are just a step away...</p>
                    </div>
            </div>
            <div>
                <div className='flex flex-col items-center  h-[600px] w-[400px] p-[20px] rounded-[20px] sm:w-[250px] sm:h-[300px] sm:flex-wrap sm:flex-col sm:items-center sm:flex sm:mx-auto shadow-xl md:mx-auto md:flex-wrap md:w-[700px] md:h-[450px]'>
                    <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        LogAdmin();
                    }}
                    >
                        <h1 className='text-center text-[50px] font-bold text-[#1239ac] sm:text-[18px] sm:text-center md:text-[24px]'>LOGIN ADMIN</h1>                       
                        <div className='p-5 sm:p-2'>
                            <span className='sm:text-[12px]'>Email</span>
                            <input 
                            onChange={onChangeForm}
                            name= "Email"
                            className='h-[50px] w-[350px] border-gray border-2 border-solid outline-none rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[30px] sm:rounded-none sm:text-[12px] md:w-[600px] md:rounded-none'
                            placeholder='Email'
                            />
                        </div>
                        <div className='p-5 sm:p-3'>
                            <span className='sm:text-[12px]'>Password</span>
                            <input
                            onChange={onChangeForm} 
                            name= "Password"
                            className='h-[50px] w-[350px] border-gray border-2 border-solid outline-none rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[30px] sm:rounded-none sm:text-[12px] md:w-[600px] md:rounded-none'
                            placeholder='Password'
                            />
                        </div>
                        <div className='flex items-center justify-center pt-5 sm:pt-3'>
                            <button
                            type='submit'
                            className='h-[50px] w-[350px] bg-[#1239ac] text-[white] rounded-[10px] sm:w-[150px] sm:h-[30px] sm:text-[12px] md:w-[400px] md:rounded-[5px]'>Login</button>                                                                                                        
                        </div>
                        <div className='flex items-center justify-center p-2 gap-16 sm:flex sm:gap-2 md:flex md:items-center md:gap-80'>
                            <h3 className='text-[12px] md:flex md:text-[15px]'>Do not have an account?</h3>
                            <Link to="/adminsignup">
                            <h3 className='text-[#1239ac] text-[12px] md:text-[15px]'>Signup</h3>
                            </Link>
                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
