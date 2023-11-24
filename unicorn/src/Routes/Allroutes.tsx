import { createBrowserRouter} from "react-router-dom"

import Blogpost from "../pages/Blog/Blogpost"
import Landing from "../pages/Landing/Landing"



const Index = createBrowserRouter([
    


    {
        path: "/",
        element: "",
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: "/Blog",
                element:<Blogpost/>
            }
        ]
    
    
        
    },
    
  
])

export default Index