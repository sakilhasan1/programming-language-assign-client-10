import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course";
import C from "../../pages/Course/CourseDetail/C";
import Ccc from "../../pages/Course/CourseDetail/Ccc";
import CoursePython from "../../pages/Course/CourseDetail/CoursePython";
import Java from "../../pages/Course/CourseDetail/Java";
import JavaScript from "../../pages/Course/CourseDetail/JavaScript";
import Php from "../../pages/Course/CourseDetail/Php";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch('http://localhost:5000/courses')
            },

            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/cd',
                element: <C></C>
            },
            {
                path: '/javaScript',
                element: <JavaScript></JavaScript>
            },
            {
                path: '/python',
                element: <CoursePython></CoursePython>
            },
            {
                path: '/java',
                element: <Java></Java>
            },
            {
                path: '/ccc',
                element: <Ccc></Ccc>
            },
            {
                path: '/php',
                element: <Php></Php>
            }



        ]

    }

])