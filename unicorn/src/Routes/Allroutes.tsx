import { createBrowserRouter} from "react-router-dom"

import Blogpost from "../pages/Blog/Blogpost"



const Index = createBrowserRouter([
    


    {
        path: "/",
        index:true,
        // element: <App />,
    
    
        
    },
    {
        path: "/Blog",
        element:<Blogpost/>
    }
  
])

export default Index