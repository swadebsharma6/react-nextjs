import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Form from "../Pages/Form";
import Home from "../Pages/Home";
import Pointer from "../components/Pointer";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/pointer',
            element: <Pointer></Pointer>
        },
        {
            path: '/form',
            element: <Form></Form>
        },
      ]
    }
  ]);