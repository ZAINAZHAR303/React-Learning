import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  // import PrivateRoute from "./PrivateRoute";
  
  // import PublicRoute from "./PublicRoute";
import Home from "../pages/home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
// const Home = () => <h1>Home Page</h1>;
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home />,
      
    },
    {
      path:"/signup",
      element: <SignUp/> ,
    },
    {
      path:"/login",
      element: <Login/>,
    }
    
  ]);
  
  export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }