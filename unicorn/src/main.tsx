import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import Index from '../src/Routes/Allroutes'
import './index.css'
import {Provider} from "react-redux"
import { Store } from './services/Stores'



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
  
      <RouterProvider router={Index} />
    </Provider>
  </React.StrictMode>
);


                
