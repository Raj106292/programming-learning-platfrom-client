import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Blogs from "../Components/Pages/Blogs/Blogs";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Course from "../Components/Pages/Course/Courses";
import Courses from "../Components/Pages/Courses/Courses";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Login from "../Components/Pages/Login/Login";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/categories',
                loader: () => fetch('https://programming-learning-platform-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://programming-learning-platform-server.vercel.app/courses/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://programming-learning-platform-server.vercel.app/course/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/*',
                element: <NotFound></NotFound>
            }
        ]
    }
])