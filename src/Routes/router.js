import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Course from "../Components/Pages/Course/Courses";
import Courses from "../Components/Pages/Courses/Courses";
import Login from "../Components/Pages/Login/Login";
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
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
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
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }
])