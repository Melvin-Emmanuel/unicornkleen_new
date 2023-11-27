import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Blogpost from "../pages/Blog/Blogpost"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import About from "../pages/About/About"



const Index = createBrowserRouter([
    


    {
        path: "/",
        index:true,
        element: <App />,
    
    
        
    },
    {
        path: "/Blog",
        element:<Blogpost/>
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
  
])

export default Index