import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Blogpost from "../pages/Blog/Blogpost"



const Index = createBrowserRouter([
    


    {
        path: "/",
        index:true,
        element: <App />,
    
    
        
    },
    {
        path: "/Blog",
        element:<Blogpost/>
    }
  
])

export default Index