import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Course from "../Components/Pages/Course/Courses";
import Courses from "../Components/Pages/Courses/Courses";
import Login from "../Components/Pages/Login/Login";
import Main from "../Layout/Main";

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
            }
        ]
    }
])