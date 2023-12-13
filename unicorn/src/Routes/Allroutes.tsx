import { createBrowserRouter } from "react-router-dom";
// import HomePage from "../Pages/HomePage"
// import ServicesPages from "../Pages/ServicesPages"
import Landing from "../pages/Landing/Landing"
// import Service from "../pages/Service/"
import Blogpost from "../pages/Blog/Blogpost";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"
import About from "../pages/About/About"
import UserAppointments from "../Components/Commons/UserAppointments"
import Admindash from "../pages/Admin/Admindash"
// import AddProducts from "
import AddBlog from "../pages/Admin/AddBlog";

import Logout from "../pages/Admin/Logout"
import Contact from "../pages/Contact/Contact";

const Index = createBrowserRouter([
  //

  {
    path: "/",
    index: true,
    element: <Landing />,
  },
//   {
//     path: "/Services",
//     element: <Service />,
//   },
  {
    path: "/Blog",
    element: <Blogpost />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/user",
    element: <UserAppointments />,
  },
  {
    path: "/Admin",
    element: <Admindash />,
  },
  {
    path: "/create-Blog",
    element: <AddBlog />,
  },
  {
    path: "/Logout",
    element: <Logout />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Index;
