import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/SignUp/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: '/signup',
            element: <Signup />,
        }]

    }
])