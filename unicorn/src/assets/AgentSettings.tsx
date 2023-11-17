// import React,{FC} from 'react'
// import styled from '@emotion/styled'
// import personIcon from "../assets/Group.svg"
// import security from '../assets/security.svg'
// import conditions from '../assets/conditions.svg'
// import notification from '../assets/Group 207.svg'

// const Container = styled.div``
// const Right = styled.div``
// const Left = styled.div``
// const UpdateInformation = styled.div``
// const Infomation = styled.div``; 
// const CardCont = styled.div``
// const SmallCont=styled.div``
// interface Iprops{
//     text: string
//     icon:any
// }
// export const InfoCard:React.FC<Iprops>= ({text,icon}) => {
//     return (
//       <CardCont className="flex w-[95%] h-[50px] rounded-md mt-[10px]  items-center gap-2 bg-bgCard cursor-pointer ">
//         <div className="w-[30px] h-[30px] rounded-full bg-bgIcon flex justify-center items-center ml-[10px]">
//           <img className="" src={icon} alt="" />
//         </div>
//         <p className="text-gray-800 font-poppins text-10 font-semibold">
//           {text}
//         </p>
//       </CardCont>
//     );
// }
// const AgentSettings = () => {
//   return (
//     <Container className="  h-[100vh] w-full flex gap-[50px] bg-white ml-[50px]">
//       <Left className="h-[550px] w-[658px] rounded-lg shadow-md mt-5 flex gap-5">
//         <Infomation
//           className=" h-[100%] w-[35%] border-r flex flex-col items-center
        
        
//          border-gray-400"
//         >
//           <InfoCard text="Personal Information" icon={personIcon} />
//           <InfoCard icon={security} text="Security" />
//           <InfoCard icon={notification} text="Notifications" />
//           <InfoCard icon={conditions} text="Terms and conditions" />
//         </Infomation>
//         <UpdateInformation>
//           <h1 className="text-black mt-[20px] font-poppins text-15 font-semibold">
//             Update personal Information
//           </h1>
//           <br />
//           {/* <br /> */}

//           <form action="">
//             <label
//               htmlFor="FullName"
//               className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//             >
//               {" "}
//               Full Name
//             </label>
//             <br />
//             <input
//               type="text"
//               id="FullName"
//               className=" rounded-md  w-[390px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//             />
//             <label
//               htmlFor="Email"
//               className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//             >
//               {" "}
//               Email
//             </label>
//             <br />
//             <input
//               type="text"
//               id="Email"
//               className=" rounded-md  w-[390px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//             />
//             <br />
//             <label
//               htmlFor="PhoneNumber"
//               className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//             >
//               {" "}
//               Phone Number
//             </label>
//             <br />
//             <input
//               type="text"
//               id="PhoneNumber"
//               className=" rounded-md  w-[390px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//             />
//             <h1 className="text-black mt-[20px] font-poppins text-15 font-semibold">
//               Personal Address
//             </h1>
//             <br />

//             <SmallCont className=" flex gap-[50px]">
//               <div>
//                 {" "}
//                 <label
//                   htmlFor="country"
//                   className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//                 >
//                   Country or region
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="country"
//                   className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//                 />
//               </div>
//               <div>
//                 {" "}
//                 <label
//                   htmlFor="city"
//                   className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//                 >
//                   City
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="city"
//                   className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//                 />
//               </div>
//             </SmallCont>
//             <br />
//             <SmallCont className=" flex gap-[50px]">
//               <div>
//                 {" "}
//                 <label
//                   htmlFor="Adress"
//                   className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//                 >
//                   Address
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="Adress"
//                   className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//                 />
//               </div>

//               <div>
//                 {" "}
//                 <label
//                   htmlFor="Postal Code"
//                   className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal"
//                 >
//                   Postal Code
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   id="Postal Code"
//                   className=" rounded-md  w-[173px] m-auto bg-bgCard border border-solid border-opacity-5 border-black"
//                 />
//               </div>
//             </SmallCont>
//             <div className="flex justify-end">
//               {" "}
//               <button className="w-[125px] h-[46PX] bg-button rounded-md mt-[10px] border-black text-white mr-[20px]">
//                 {" "}
//                 Save Profile
//               </button>
//             </div>
//           </form>
//         </UpdateInformation>
//       </Left>

//       <Right className='className="h-[550px] w-[658px] rounded-lg shadow-md mt-5'>
//         <div className='flex justify-between w-[85%] mx-auto'>
//           <div>
//             <p className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal">
//               Total Ajo:{" "}
//               <span className="text-black mt-[20px] font-poppins text-15 font-semibold">
//                 24,000
//               </span>
//             </p>
//             <p className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal">
//               Ajo type:{" "}
//               <span className="text-black mt-[20px] font-poppins text-15 font-semibold">
//                 Daily
//               </span>
//             </p>
//             <p className="text-[rgba(18,18,18,0.70)] font-open-sans text-10 font-normal">
//               Fixed Saving:{" "}
//               <span className="text-black mt-[20px] font-poppins text-15 font-semibold">
//                 2,000
//               </span>
//             </p>
//           </div>
//           <button className="w-[125px] h-[46PX] bg-button rounded-md mt-[10px] border-black text-white mr-[20px]">
//             {" "}
//             Create Ajo
//           </button>
//         </div><table></table>
//       </Right>
//     </Container>
//   );
// }

// export default AgentSettings