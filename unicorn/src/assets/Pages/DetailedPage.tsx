// import React, {useEffect,useState} from 'react'
// import Header from '../components/Commons/Header'
// import Footer from '../components/Commons/Footer'
// import { useParams } from "react-router-dom"
// import Data from "../../Products.json"
// import cart from "../assets/cart-removebg-preview.png"


// const DetailedPage = () => {
//     const { id }= useParams()
//     const emptyArray=new Array
//     const [product, setProduct] = useState<object>([])
//     const getItem =  () => {

//         setProduct(Data[Number(id)]);
//         console.log("this is product",product)
//     }
//     useEffect(() => {
//         getItem()
        
//     })

//   return (
//     <div>
//       <Header />

   
//         <div className="h-[500px] w-[80%] m-auto mt-[50px] mb-[50px] shadow-md flex justify-between">
//           <div className="h-[100%] w-[30%] bg-slate-600 rounded-lg flex justify-center items-center">
//             <img className="h-[300px] m-auto" src={product.image} alt="" />
//           </div>
//           <div className="h-full w-[60%]  rounded-lg flex justify-center flex-col gap-5">
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//               {product.title}
//             </h5>
//             <div className="text-3xl font-bold text-gray-900 dark:text-white">
//               ${product.price}
//             </div>
//             <div className='h-[50px] w-[400px] flex gap-20 text-white text-2xl font-extra-bold pr-[10px] pl-[10px]  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"'>
//               {" "}
//               <img className="h-[100%]  my-0" src={cart} alt="" />{" "}
//               <button>Add to Cart</button>
//             </div>
//           </div>
//         </div>
      

//       <Footer />
//     </div>
//   );
// }

// export default DetailedPage