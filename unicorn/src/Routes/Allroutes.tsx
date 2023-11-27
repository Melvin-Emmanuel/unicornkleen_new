import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Blogpost from "../pages/Blog/Blogpost"
import Login from "../assets/Auth/Logins"
import SignUp from "../assets/Auth/SignUp"
import About from "../assets/Pages/About"



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