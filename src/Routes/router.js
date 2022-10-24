import { createBrowserRouter } from "react-router-dom";
import Courses from "../Components/Pages/Course/Courses";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            }
        ]
    }
])