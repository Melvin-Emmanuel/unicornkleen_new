// import { configureStore } from "@reduxjs/toolkit"
// import myreducer from "./Reducers"

// export const Store = configureStore({
//     reducer:myreducer
// })
import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./Reducers";

export const Store = configureStore({
  reducer: myreducer,
});