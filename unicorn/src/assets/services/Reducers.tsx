// import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import {Productype} from '../Types/Alltypes'

// const initialState = {
//     cart: [] as Array<Productype>,
//     totalQuantity: 0,
//     totalPrice: 0,
//     discount:50
// }

// const Reducers = createSlice({
//   name: "e-commerce",
//   initialState,
//     reducers: {
//         addToCart: (state, { payload }:PayloadAction<Productype>) => {
//             const check = state.cart.findIndex((el) => el.id === payload.id)
//             console.log(check)

//             if (check >= 0) {
//                 state.cart[check].cardQuantity!+1
//             } else {
//                 state.cart.push({
//                     ...payload,
//                     cardQuantity:1
//                 })
//             }
//             state.totalPrice = state.cart.reduce((acc,itr) => {
//                 return acc + itr.price*itr.cardQuantity!
//             },0)
//         },
//         removeFromCart: (state, { payload }: PayloadAction<Productype>) => {
//             const check = state.cart.findIndex((el) => el.id === payload.id)
//             if (state.cart[check].cardQuantity! > 1) {
//                 state.cart[check].cardQuantity!-=1
                
//             } else {
//                 state.cart=state.cart.filter((el)=>el.id!=payload.id)
//             }
//             state.totalPrice = state.cart.reduce((acc, itr) => {
//                 return acc +itr.price*itr.cardQuantity!
//             }, 0)
            
//             state.totalQuantity-=1
            
//         }
//   }
// });

// export const {addToCart,removeFromCart} = Reducers.actions

// export default Reducers.reducer