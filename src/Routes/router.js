import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Course from "../Components/Pages/Course/Courses";
import Courses from "../Components/Pages/Courses/Courses";
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
                element: <Courses></Courses>
            },
            {
                path: '/categories/:id',
                element: <Course></Course>
            },
        ]
    }
])