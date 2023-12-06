import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.tsx'
import './index.css'
import {RouterProvider} from "react-router-dom"
import Index from './Routes/Allroutes.tsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
=======
>>>>>>> f314794e263fe1af8e2bc07c649f462b67f511a5

import { RouterProvider } from 'react-router-dom'
import Index from '../src/Routes/Allroutes'
import './index.css'
import {Provider} from "react-redux"
import { Store } from './services/Stores'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ToastContainer />
   <RouterProvider router={Index}/>
  </React.StrictMode>,
)
=======
    <Provider store={Store}>
  
      <RouterProvider router={Index} />
    </Provider>
  </React.StrictMode>
);


                
>>>>>>> f314794e263fe1af8e2bc07c649f462b67f511a5
