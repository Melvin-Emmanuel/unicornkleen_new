import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import Index from '../src/Routes/Allroutes'
import './index.css'
import {Provider} from "react-redux"
import { Store } from './services/Stores'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={Store}>
  
      <RouterProvider router={Index} />
    </Provider>
  </React.StrictMode>
);


                
