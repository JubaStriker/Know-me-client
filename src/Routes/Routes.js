import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Messages from "../Pages/Messages/Messages";
import Notifications from "../Pages/Notifications/Notifications";
import Profile from "../Pages/Profile/Profile";
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
            path: '/friends',
            element: <Friends />,
        },
        {
            path: '/notifications',
            element: <Notifications />,
        },
        {
            path: '/message',
            element: <Messages />,
        },
        {
            path: '/profile',
            element: <Profile />,
        }]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
])