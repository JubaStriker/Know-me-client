import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Messages from "../Pages/Messages/Messages";
import Notifications from "../Pages/Notifications/Notifications";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Profile from "../Pages/Profile/Profile";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Main /></PrivateRoute>,
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
        },
        {
            path: '/details/:id',
            element: <PostDetails />,
            loader: ({ params }) => fetch(`https://know-me-server.vercel.app/post/${params.id}`)
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