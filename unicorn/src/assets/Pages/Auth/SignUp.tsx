// import React, {useState} from 'react'
// import { createUser} from "../../utils/AxiosCalls" 
import pic from "../../assets/Cleaning tools.jpg"
 import { useNavigate } from 'react-router-dom'

const SignUp :React.FC= () => {
     const Navigate = useNavigate()
    // const [formData, setFormData] = useState ({
    //     UserName: "",
    //     Email: "",
    //     Password: "",
    // });

    // const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = e.target;

    //     setFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }))
    // }

     const RegisterUser = async () => {
         try
         {
            //  const res = await createUser(formData)
                Navigate("/signin");
            //  console.log("this is for form", res)
         }catch(err) {
             return err
         }

     }

  return (
    <div>
        {/* <div className='w-[100%] min-h-[70vh] sm:mx-auto sm:w-[100%] sm:min-h-[70vh] bg-cover bg-center bg-no-repeat py-20 ' style={{backgroundImage: `url(${pic1})`}}> */}
            <div className='flex items-center justify-center pt-[50px] sm:mx-auto sm:flex-wrap'>
                <div className='bg-[#1239ac] flex flex-col items-center pt-[70px] h-[600px] w-[400px] rounded-[20px] sm:w-[250px] sm:h-[400px]'>
                    <div>
                        <img
                        className='h-[300px] w-[300px] rounded-[10px] object-cover overflow-hidden sm:h-[150px] sm:w-[150px]'
                        src={pic} alt="" />
                    </div>
                    <br />
                    <div className='pt-[90px] sm:pt-6'>
                        <p className='text-[white] sm:text-[10px]'>Welcome to unicorn Kleen <br /> a place where all your worries about <br /> are meet...</p>
                        <p className='text-[white] sm:text-[10px]'>you are just a step away...</p>
                    </div>
                </div>
                <div className='flex flex-col items-center  h-[600px] w-[400px] rounded-[20px] sm:h-[400px] sm:w-[250px] sm:flex-wrap sm:flex-col sm:items-center sm:flex sm:mx-auto sm:pt-[5px]'>
                    <form 
                   onSubmit={(e) => {
                    e.preventDefault();
                    RegisterUser();
                   }}
                    >
                        <h1 className='flex items-center justify-center text-[50px] font-bold text-[#1239ac] sm:text-[18px] '>REGISTER</h1>
                        <div className=' p-5 marker:after:sm:pt-4'>
                            <input
                            required
                            // onChange={onChangeForm}
                            name='UserName'
                            className='h-[50px] w-[350px] outline rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[40px] z'
                            placeholder='Username'
                            />
                        </div>
                        <br />
                        <div className='p-5'>
                            <input
                            required
                            // onChange={onChangeForm}
                            name='Email'
                            className='h-[50px] w-[350px] outline rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[40px]'
                            placeholder='Email'
                            />
                        </div>
                        <br />
                        <div className='p-5'> 
                            <input
                            required
                            // onChange={onChangeForm}
                            name='Passsword'
                            className='h-[50px] w-[350px] outline rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[40px] '
                            placeholder='Password'
                            />
                        </div>
                        <br />
                        <div className='p-5'>
                            <input                            
                            // onChange={onChangeForm}
                            name='Role'
                            className='h-[50px] w-[350px] outline rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[40px]'
                            placeholder='Role'
                            />
                        </div>
                        <br />
                        <div className='flex items-center justify-center sm:pt-3'>
                            <button
                            onClick={RegisterUser}
                            type='submit'
                            className='h-[50px] w-[350px] bg-[#1239ac] text-[white] rounded-[10px] sm:w-[150px] sm:h-[30px] '>SIGN UP</button>
                        
                            
                        
                            
                        </div>
                        <div className='flex items-center justify-center gap-16 pt-[10px] sm:flex-col sm:gap-1 sm:pt-0'>
                            <h3>Already have an account?</h3>
                            <h3 className='text-[#1239ac]'>Login</h3>
                        </div>
                    </form>
                </div>
            </div>
        {/* </div> */}
      
    </div>
  )
}

export default SignUp