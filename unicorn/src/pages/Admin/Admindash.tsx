import styled from "@emotion/styled"
import { FaSearchengin } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FcExpand } from "react-icons/fc";
import { SlBookOpen } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import menu from "../../assets/assets/Menu.svg"
import { FaMicroblog } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { changeNav, changeUser, changebooking, showApps, showNotification } from "../../services/Reducers";

import headerpic from "../../assets/assets/melvin.jpg"




const MenuIcon = styled.div``
const Input = styled.div`
width: 250px;
`

const Message =styled.div``
const NotHeader=styled.div``
const Theme = styled.div``
const Notifications = styled.div``
const Person = styled.div``
const Icon = styled.div``

export const Side = () => {
const Dispatch=useDispatch()
  const user = useSelector((state: any) => state.user)
  const booking=useSelector((state:any)=>state.booking)
  return (
    <div className="h-screen fixed shadow-md w-[13%]   bg-[#2B2A3F]">
      <div className="h-[15%] flex justify-center items-center gap-[10px]">
        <div className="h-[60px] w-[60px] rounded-full border-1 border-solid overflow-hidden object-cover">
          <img src={headerpic} alt="" />
        </div>
        <p className="text-lg font-extrabold text-white">Unicorn</p>
      </div>
      <hr />
      <div className="flex h-16 w-[90%] justify-between ml-1 mr-1 mt-5 cursor-pointer text-white text-xl items-center ">
        <Link to={"/Admin"} className="flex gap-[10px] items-center">
        
          <Icon>
            <IoHome />
          </Icon>
          <p>Dashboard</p>
        </Link>
      </div>

      <div
        className="flex h-16 w-[90%] justify-between ml-1 mr-1 cursor-pointer text-white text-xl items-center "
        onClick={() => {
          Dispatch(changeUser());
        }}
      >
        <div className="flex gap-[10px] items-center">
          {" "}
          <Icon>
            <CiUser />
          </Icon>
          <p>Users</p>
        </div>
        <FcExpand />
      </div>
      {user ? (
        <>
          <div className="text-white text-base flex gap-[10px] justify-center cursor-pointer">
            <GoDotFill />
            <p> List Users</p>
          </div>
          <div className="text-white text-base flex gap-[10px] justify-center cursor-pointer">
            <GoDotFill />
            <p> search user</p>
          </div>
        </>
      ) : null}
      <div
        className="flex h-16 w-[90%] gap-[10px]  justify-between ml-1 mr-1   cursor-pointer text-white text-xl items-center "
        onClick={() => {
          Dispatch(changebooking());
        }}
      >
        <div className="flex gap-[10px] items-center">
          <Icon>
            <SlBookOpen />
          </Icon>
          <p>Bookings</p>
        </div>

        <FcExpand />
      </div>
      {booking ? (
        <>
          <div className="text-white text-base flex gap-[10px] justify-center cursor-pointer">
            <GoDotFill />
            <p> List Bookings</p>
          </div>
        </>
      ) : null}
      <div className="flex h-16 w-[90%] j justify-between  ml-1 mr-1 cursor-pointer   text-white text-xl items-center ">
        <Link to={"/Logout"} className="flex gap-[10px] items-center">
          <Icon>
            <AiOutlineLogout />
          </Icon>
          <p>Log out</p>
        </Link>
      </div>
      <div className="flex h-16 w-[90%] j justify-between  ml-1 mr-1 cursor-pointer   text-white text-xl items-center ">
        <Link to={"/create-Blog"} className="flex gap-[10px] items-center">
          <Icon>
            <FaMicroblog />
          </Icon>
          <p>Add Blog</p>
        </Link>
      </div>
    </div>
  );
 }

export const SideB = () => {
  return (
    <div className="h-screen w-[4%] fixed   bg-[#2B2A3F] shadow-md top-0 left-0 text-3xl  text-white  flex flex-col pt-10 gap-20 items-center transition-all duration-300 ease-in-out">
      <div className="hover:bg-gray-500 w-[90%] rounded-sm flex justify-center items-center cursor-pointer">
        <IoHome />
      </div>
      <div className="hover:bg-gray-500 w-[90%] rounded-sm flex justify-center items-center  transition-all duration-300 ease-in-out cursor-pointer">
        <CiUser />
      </div>
      <div className="hover:bg-gray-500 w-[90%] rounded-sm flex justify-center  transition-all duration-300 ease-in-out items-center cursor-pointer">
        <SlBookOpen />
      </div>
      <Link to={"/Logout"} className="hover:bg-gray-500 w-[90%] rounded-sm flex  transition-all duration-300 ease-in-out justify-center items-center cursor-pointer">
        <AiOutlineLogout />
      </Link>
    </div>
  )
}

export const Head = () => {
  

  
  const notification = useSelector((state: any) => state.Notification);
  const App = useSelector((state: any) => state.Apps);
  const Sidebar=useSelector((state:any)=>state.nav)

  const dispatch = useDispatch()
  const full =
    "fixed top-0 right-0 w-[93%] shadow-md h-24 `${}` mt-4 mr-4 border-2 bg-white border-solid flex justify-between";
    const half =
      "fixed top-0 right-0 w-[85%] shadow-md h-24 `${}` mt-4 mr-4 border-2 bg-white border-solid flex justify-between";

  return (
    <div className={Sidebar ? `${half}` : `${full}`}>
      <div className="flex items-center ml-6 gap-4">
        <MenuIcon onClick={() => {
          dispatch(changeNav())
        }} className="cursor-pointer ">
          <img src={menu} alt="" />
        </MenuIcon>
        <Input className="overflow-hiden border-2 bg-[#F5F4FA]  border-solid h-12 flex">
          <input
            type="text"
            className="h-[100%] outline-none bg-[#F5F4FA]  w-[50%] ml-[5px]"
            placeholder="search"
          />
          <div className="h-full w-[50%] bg-[#6560F0] cursor-pointer flex justify-center gap-[10px] text-white text-xl border-none items-center">
            {" "}
            search <FaSearchengin />
          </div>
        </Input>
      </div>

      <div className="flex w-[50%] items-center justify-end gap-7 mr-6 ">
        <Theme className="h-[60px] w-[60px] bg-[#6A8EF54A] rounded-full flex justify-center items-center text-2xl hover:bg-gray-300 hover:text-white transition-all transition-3000ms cursor-pointer">
          <FaRegMoon />
        </Theme>
        <Notifications className="text-3xl cursor-pointer">
          <div
            onClick={() => {
              dispatch(showNotification());
            }}
          >
            <IoIosNotificationsOutline />
          </div>

          {notification ? (
            <>
              <div
                onMouseLeave={() => {
                  dispatch(showNotification());
                }}
                className=" bg-white absolute shadow-lg h-96 top-24 right-52  w-80"
              >
                <NotHeader className="flex  h-[20%] w-full justify-between border-b border-dotted border-b-gray-500">
                  <p className="m-0 p-2  text-base font-medium">
                    Notifications <span className="text-gray-400">(03)</span>
                  </p>{" "}
                  <p className="text-base p-2 text-[#6560f0] font-medium">
                    Clear All
                  </p>
                </NotHeader>

                <Message className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
                    <MdMessage />
                  </div>
                  <div>
                    <p className="text-base font-bold  text-[#2b2a3f]">
                      A customer just ordered
                    </p>
                    <p className="text-base font-normal ">2 hour ago</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
                </Message>

                <Message className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
                    <CiUser />
                  </div>
                  <div>
                    <p className="text-base font-bold  text-[#2b2a3f]">
                      A new user was Added
                    </p>
                    <p className="text-base font-normal ">2 hour ago</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
                </Message>

                <Message className="flex  items-center hover:bg-gray-100 transition-all duration-300 ease-in-out justify-between border-b-gray-600 border-dotted border-b  p-3">
                  <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center text-[#6560F0] bg-[#F2F1F9]">
                    <MdMessage />
                  </div>
                  <div>
                    <p className="text-base font-bold  text-[#2b2a3f]">
                      Withdrawal order initiated
                    </p>
                    <p className="text-base font-normal ">2 hour ago</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#6560F0]"></div>
                </Message>

                <p className="text-base flex w-full h-auto mt-9 text-[#6560f0] underline justify-center">
                  see all Notifications
                </p>
              </div>
            </>
          ) : null}
        </Notifications>
        <Person
          onClick={() => {
            dispatch(showApps());
          }}
          className="flex gap-[10px] items-center cursor-pointer"
        >
          <div className="h-[50px] w-[50px] rounded-lg border-2 border-solid object-cover overflow-hidden ">
            <img src={headerpic} alt="" />
          </div>
          <div>
            <p className="font-bold text-xl text-black">Mr Melvin</p>
            <p
              className="font-light text-[#4c4a68
]"
            >
              Admin
            </p>
          </div>

          {App ? (
            <>
        
              <div onMouseLeave={() => {
                dispatch(showApps())
              }} className=" bg-white  absolute top-24 right-0 z-40  shadow-lg h-48 w-48 ">
                <div className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
                  <IoPersonOutline />{" "}
                  <p className="font-medium text-base text-[#2b2a3f]">
                    My Account{" "}
                  </p>
                </div>
                <div className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
                  <IoMdSettings />
                  <p className="font-medium text-base text-[#2b2a3f]">
                    Settings
                  </p>
                </div>
                <Link to={"/Logout"} className="flex  gap-3 p-4 items-center text-[#6560F0] text-2xl">
                  <AiOutlineLogout />
                  <p className="font-medium text-base text-[#2b2a3f]">
                    Log Out
                  </p>
                </Link>
              </div>
            </>
          ) : null}
        </Person>
      </div>
    </div>
  );
}
// export const DashHome = () => {
//   return (
//     <div>
//       <div className="flex ">
//         <div className="h-72 w-[90%] shadow-md flex items-center  m-10 rounded-md bg-[#7d55d6]">
//           <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
//             <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
//               <CiHome />
//             </div>
//             <div>
//               {" "}
//               <p className="text-2xl font-bold text-gray-200">Our Service </p>
//               <h1 className="text-2xl font-semibold  text-white ">
//                 500K users
//               </h1>
//             </div>
//           </div>
//           <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
//             <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
//               <CiHome />
//             </div>
//             <div>
//               {" "}
//               <p className="text-2xl font-bold text-gray-200">Our Service </p>
//               <h1 className="text-2xl font-semibold  text-white ">
//                 500K users
//               </h1>
//             </div>
//           </div>
//           <div className="h-[60%] w-72 mx-auto rounded-md flex  items-center gap-5 pl-5 pt-5 border-2 border-solid  bg-[#A286E1]">
//             <div className="h-14 m-5 w-14 bg-white border-2 rounded-md border-solid flex justify-center items-center text-4xl ">
//               <CiHome />
//             </div>
//             <div>
//               {" "}
//               <p className="text-2xl font-bold text-gray-200">Our Service </p>
//               <h1 className="text-2xl font-semibold  text-white ">
//                 500K users
//               </h1>
//             </div>
//           </div>
//         </div>
//         {/* <div className="h-52 w-96 shadow-md m-10" ></div>
//       <div className="h-52 w-96 shadow-md m-10" ></div> */}
//       </div>

//       <div className="h-40 w-[90%] flex justify-between mx-auto shadow-md">
//         <div className="flex flex-col gap-3 p-5">
//           <h5 className="text-base font-medium text-[#9c9ab6] ">
//             New customers this month
//           </h5>
//           <p className="text-2xl text-[#2b2a3f] font-black">4.5k</p>
//           <div className="h-10 w-24 bg-[#E8F4F1] text-[#06b48a] text-base flex justify-center gap-3 rounded-md cursor-pointer items-center">
//             43% <FaArrowUpLong />
//           </div>
//         </div>

//         <div className="flex h-full w-[35%] items-center">
//           <img className="h-[50%]" src={manypics} alt="" />{" "}
//           <p className="text-base text-[#2b2a3f] font-extrabold">Joined Today</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React from 'react'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// export const SimpleLineChart:React.FC = () => {

//   return (
//     <div 
//         style={{
//           width: "500px",
//           height: "500px"
//         }}>
//         <ResponsiveContainer width="100%" height="100%">
//         <LineChart

//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }


//for the amount to show change the pv to be amount


import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DashHome from "./DashHome";
import { useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export const SameDataComposedChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
const Admindash = () => {
  const SideBar=useSelector((state:any)=>state.nav)

  return (
    <div>
      <Head />
      {
        SideBar?(<Side/> ):<SideB/>
     }
     <DashHome/>
      {/* <SameDataComposedChart/> */}
      
{/* 
      <Side />
     <Head/>  */}


    </div>
  )
}

export default Admindash