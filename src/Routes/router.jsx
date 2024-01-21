import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Form from "../Pages/Form";
import Home from "../Pages/Home";
import Nested from "../Pages/Nested";
import Redundant from "../Pages/Redundant";
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
        {
            path: '/red',
            element: <Redundant></Redundant>
        },
        {
            path: '/nest',
            element: <Nested></Nested>
        },
      ]
    }
  ]);