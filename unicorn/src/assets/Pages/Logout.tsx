import React, { useState } from 'react'
import { MdLockOutline } from "react-icons/md";
import {useNavigate} from  "react-router-dom"

const Logout = () => {
    const [count, setcount] = useState(10)
    const Navigate=useNavigate()
    const changecount = () => {
        setcount(count - 1)
        if (count <= 1) {
            Navigate("/Admin")
        }
    }

    setTimeout(() => {
        changecount()
    },1000)
  return (
    <div className="flex bg-[#F2F1F9] h-screen w-full justify-center items-center ">
      <div className="h-[30rem] w-[40rem] shadow-md bg-[white] my-[10%] flex flex-col items-center rounded-sm gap-6 justify-center ">
        <div className="h-24 w-24  text-[#06B48A] rounded-full bg-[#ECF3F2] flex items-center justify-center text-5xl">
          <MdLockOutline />
        </div>
        <h1 className="uppercase text-[#2b2a3f] font-bold text-2xl">
          You are Logged Out
        </h1>
        <p className="text-center text-[#79788e] text-base ">
          Your account is verified, your account is now safe from <br />
          unwanted activities
        </p>
        <button className="px-48 hover:outline-none focus:outline-none border-none py-3">
          Sign in now{" "}
        </button>

        <p className="text-base font-bold">
          Redirecting to homepage in <span className='font-extrabold'> {count}</span>
        </p>
      </div>
    </div>
  );
}

export default Logout