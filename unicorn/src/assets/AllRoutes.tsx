import { createBrowserRouter } from "react-router-dom"
// import HomePage from "../Pages/HomePage"
// import ServicesPages from "../Pages/ServicesPages"
import Landing from "../Pages/Landingpage/Landing"
import Service from "../Pages/service"
import Blogpost from "../Pages/Blogpost"
import Login from "../Pages/Auth/Logins"
import SignUp from "../Pages/Auth/SignUp"
import About from "../Pages/About"
import UserAppointments from "../Components/Commons/UserAppointments"


const Index = createBrowserRouter([
//    
   
    {
        path: "/",
        index:true,
        element:<Landing/>
    },
    {
        path: "/Services",
        element:<Service/>
    },
    {
        path: "/Blog",
        element:<Blogpost/>
    },
    {
        path: "/signin",               
        element:<Login/>
    },
    {
        path: "/Signup",
        element:<SignUp/>
    },
    {
        path: "/About",
        element:<About/>
    }, {
        path: "/user",
        element:<UserAppointments/>
    }
])


export default Index